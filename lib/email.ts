import { Resend } from 'resend';

/**
 * PureNest Cleaning Co. — Quote request email delivery (Phase 5.5).
 *
 * This module is the single seam for real quote-request email delivery
 * using the official Resend Node.js SDK.
 *
 * Security & privacy contract:
 *  - Credentials come ONLY from environment variables:
 *      RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL
 *    They are never hardcoded and never committed.
 *  - The sender is always QUOTE_FROM_EMAIL. The customer's submitted
 *    email is used only as the Reply-To address — never as the From.
 *  - Every user-provided value is HTML-escaped before being inserted
 *    into the email body, so a visitor cannot inject markup/scripts.
 *  - This module NEVER logs customer PII or provider/technical details.
 *
 * If any required configuration is missing, or delivery fails, the
 * module throws a generic error. The caller (the quote API route)
 * converts that into a safe, generic HTTP 500 response.
 */

export type QuoteEmailSource = {
  service?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

/** Sanitized quote data that has already passed server-side validation. */
export type QuoteEmailPayload = {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  preferredDate?: string;
  preferredTime?: string;
  frequency?: string;
  message?: string;
  source?: QuoteEmailSource;
};

/** HTML-escapes a user-provided string so it is safe to embed in email HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LABEL_STYLE = 'padding:10px 14px;vertical-align:top;color:#66736d;font-size:14px;';
const VALUE_STYLE = 'padding:10px 14px;vertical-align:top;color:#26322e;font-size:14px;';

/** Renders a single label/value row. The label is trusted; the value is escaped. */
function row(label: string, value: string): string {
  const safeValue = escapeHtml(value.trim());
  if (!safeValue) return '';
  return `<tr>
  <td style="${LABEL_STYLE}">${escapeHtml(label)}</td>
  <td style="${VALUE_STYLE}">${safeValue}</td>
</tr>`;
}

/** Renders the optional, non-PII source/UTM context into the email. */
function sourceSection(source?: QuoteEmailSource): string {
  if (!source) return '';
  const entries: string[] = [];
  if (source.service) entries.push(row('Service Referred', source.service));
  if (source.utmSource) entries.push(row('UTM Source', source.utmSource));
  if (source.utmMedium) entries.push(row('UTM Medium', source.utmMedium));
  if (source.utmCampaign) entries.push(row('UTM Campaign', source.utmCampaign));
  if (entries.length === 0) return '';
  return `
  <h2 style="margin:0 0 10px;font-size:16px;color:#173f35;">Source</h2>
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">${entries.join('')}</table>`;
}

function buildQuoteEmailHtml(payload: QuoteEmailPayload, referenceId: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f7f6f1;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="background-color:#173f35;border-radius:8px 8px 0 0;padding:22px 24px;">
          <h1 style="margin:0;color:#ffffff;font-size:18px;letter-spacing:0.5px;">PURENEST CLEANING CO.</h1>
          <p style="margin:4px 0 0;color:#dcc9a3;font-size:13px;">New Quote Request</p>
        </td>
      </tr>
      <tr>
        <td style="background-color:#ffffff;border-radius:0 0 8px 8px;padding:24px;color:#26322e;font-family:Arial,Helvetica,sans-serif;">
          <h2 style="margin:0 0 10px;font-size:16px;color:#173f35;">Customer</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-bottom:20px;">
            ${row('Full Name', payload.fullName)}
            ${row('Email', payload.email)}
            ${row('Phone', payload.phone)}
          </table>

          <h2 style="margin:0 0 10px;font-size:16px;color:#173f35;">Property</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-bottom:20px;">
            ${row('Property Type', payload.propertyType)}
            ${row('Service Needed', payload.serviceNeeded)}
            ${payload.frequency ? row('Cleaning Frequency', payload.frequency) : ''}
          </table>

          <h2 style="margin:0 0 10px;font-size:16px;color:#173f35;">Schedule</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-bottom:20px;">
            ${payload.preferredDate ? row('Preferred Date', payload.preferredDate) : ''}
            ${payload.preferredTime ? row('Preferred Time', payload.preferredTime) : ''}
          </table>

          <h2 style="margin:0 0 10px;font-size:16px;color:#173f35;">Additional Information</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-bottom:20px;">
            ${row('Message', payload.message ?? '')}
          </table>

          ${sourceSection(payload.source)}

          <p style="margin:20px 0 0;padding-top:16px;border-top:1px solid #e5e1d8;color:#66736d;font-size:13px;">
            Reference: <span style="color:#173f35;font-weight:bold;">${escapeHtml(referenceId)}</span>
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

/**
 * Sends the quote-request email via Resend.
 *
 * Throws a generic Error on missing configuration or delivery failure.
 * The caller must NOT log the thrown message, which intentionally
 * carries no customer PII and no provider/technical details.
 */
export async function sendQuoteRequestEmail(
  payload: QuoteEmailPayload,
  referenceId: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error('Quote email delivery is not configured.');
  }

  // The service value has already passed the server-side allowlist
  // validation (it must be one of the known service options), so it is
  // safe to use directly in the email subject. HTML escaping is applied
  // only to the email body (see buildQuoteEmailHtml).
  const subject = `New Quote Request — ${payload.serviceNeeded}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: [payload.email],
    subject,
    html: buildQuoteEmailHtml(payload, referenceId),
  });

  if (error) {
    throw new Error('Quote email delivery failed.');
  }
}
