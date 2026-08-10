import { NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';

/**
 * PureNest Cleaning Co. — Quote Request API
 *
 * Phase 5.5: real quote-request email delivery via the official Resend
 * SDK (see lib/email.ts). All Phase 5.4 hardening is preserved.
 *
 * Flow:
 *   Visitor → QuoteForm → POST /api/quote → existing validation/security
 *   → Resend → PureNest recipient email (QUOTE_TO_EMAIL)
 *
 * Phase 5.4 hardening preserved:
 *   - method validation (non-POST → 405 with `Allow: POST`)
 *   - content-type validation (non-JSON → 415)
 *   - body-size protection (→ 413)
 *   - same-origin protection (cross-origin/cross-site → 403)
 *   - server-side validation incl. date constraints (→ 400)
 *   - safe, generic error responses (no internal detail, no PII logged)
 *
 * Delivery errors (missing env config, Resend failure, invalid
 * credentials) all surface as a safe, generic HTTP 500 — no provider
 * details, no secrets, no customer PII, and never a false success.
 *
 * Contract:
 *   POST /api/quote
 *   Body: { fullName, email, phone, propertyType, serviceNeeded,
 *           preferredDate, preferredTime, frequency, message, source? }
 *   Success: 200 { ok: true, demo: false, message, referenceId }
 *   Validation error: 400 { ok: false, errors: { field: message } }
 */

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 32 * 1024; // 32 KB
const MAX_TEXT_LENGTH = 2000;

const PROPERTY_TYPES = ['House', 'Apartment', 'Office', 'Short-Term Rental', 'Other'] as const;
const SERVICES = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out',
  'Airbnb Cleaning',
  'Commercial Cleaning',
  'Other',
] as const;
const FREQUENCIES = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly'] as const;

type QuoteSource = {
  service?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

type QuotePayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  propertyType?: unknown;
  serviceNeeded?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  frequency?: unknown;
  message?: unknown;
  source?: unknown;
};

function json(data: unknown, status: number) {
  return NextResponse.json(data, { status });
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

/** Returns today and +1 year as `yyyy-mm-dd` local strings. */
function dateBounds(): { min: string; max: string } {
  const pad = (n: number) => `${n}`.padStart(2, '0');
  const fmt = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const max = new Date(now);
  max.setFullYear(max.getFullYear() + 1);
  return { min: fmt(now), max: fmt(max) };
}

function isValidDate(value: unknown): boolean {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const t = new Date(`${value}T00:00:00`).getTime();
  return !Number.isNaN(t);
}

/** Validates an optional `source` object and returns a sanitized copy. */
function sanitizeSource(value: unknown): QuoteSource | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const record = value as Record<string, unknown>;
  const pick = (key: string): string | undefined => {
    const v = record[key];
    return typeof v === 'string' ? v.slice(0, 100) || undefined : undefined;
  };
  const service = pick('service');
  // Only keep the service if it matches a known option (non-PII label).
  return {
    service: service && (SERVICES as readonly string[]).includes(service) ? service : undefined,
    utmSource: pick('utmSource'),
    utmMedium: pick('utmMedium'),
    utmCampaign: pick('utmCampaign'),
  };
}

/**
 * Validates the payload and returns a map of field errors. Mirrors
 * the client-side validation in components/QuoteForm.tsx.
 */
function validatePayload(payload: QuotePayload): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!isNonEmptyString(payload.fullName) || payload.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  } else if (payload.fullName.trim().length > 100) {
    errors.fullName = 'Please keep your name under 100 characters.';
  }

  if (!isNonEmptyString(payload.email) || !EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  } else if (payload.email.trim().length > 254) {
    errors.email = 'Please enter a shorter email address.';
  }

  if (!isNonEmptyString(payload.phone)) {
    errors.phone = 'Please enter your phone number.';
  } else {
    const digits = payload.phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      errors.phone = 'Please enter a valid phone number.';
    }
  }

  if (
    typeof payload.propertyType !== 'string' ||
    !(PROPERTY_TYPES as readonly string[]).includes(payload.propertyType)
  ) {
    errors.propertyType = 'Please choose a property type.';
  }

  if (
    typeof payload.serviceNeeded !== 'string' ||
    !(SERVICES as readonly string[]).includes(payload.serviceNeeded)
  ) {
    errors.serviceNeeded = 'Please choose a service.';
  }

  if (payload.preferredDate !== undefined && payload.preferredDate !== '') {
    const preferredDate = payload.preferredDate;
    if (typeof preferredDate !== 'string' || !isValidDate(preferredDate)) {
      errors.preferredDate = 'Please choose a valid date.';
    } else {
      const { min, max } = dateBounds();
      if (preferredDate < min) {
        errors.preferredDate = 'Please choose a date from today onwards.';
      } else if (preferredDate > max) {
        errors.preferredDate = 'Please choose a date within the next year.';
      }
    }
  }

  if (payload.preferredTime !== undefined && payload.preferredTime !== '') {
    if (typeof payload.preferredTime !== 'string' || !TIME_PATTERN.test(payload.preferredTime)) {
      errors.preferredTime = 'Please choose a valid time.';
    }
  }

  if (payload.frequency !== undefined && payload.frequency !== '') {
    if (
      typeof payload.frequency !== 'string' ||
      !(FREQUENCIES as readonly string[]).includes(payload.frequency)
    ) {
      errors.frequency = 'Please choose a valid frequency.';
    }
  }

  if (typeof payload.message === 'string' && payload.message.length > MAX_TEXT_LENGTH) {
    errors.message = 'Please keep your message under 2,000 characters.';
  }

  return errors;
}

export async function POST(request: Request) {
  try {
    // 1. Same-origin protection (where appropriate).
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host) {
      let originHost = '';
      try {
        originHost = new URL(origin).host;
      } catch {
        originHost = '';
      }
      if (originHost && originHost !== host) {
        return json({ ok: false, message: 'Cross-origin requests are not accepted.' }, 403);
      }
    }
    const secFetchSite = request.headers.get('sec-fetch-site');
    if (secFetchSite === 'cross-site') {
      return json({ ok: false, message: 'Cross-origin requests are not accepted.' }, 403);
    }

    // 2. Content-type validation.
    const contentType = request.headers.get('content-type') ?? '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return json({ ok: false, message: 'Unsupported media type. Please submit the form again.' }, 415);
    }

    // 3. Body-size protection.
    const contentLength = Number(request.headers.get('content-length') ?? '0');
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return json({ ok: false, message: 'Request body too large.' }, 413);
    }

    // 4. Parse with an explicit size guard on the raw text.
    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return json({ ok: false, message: 'Request body too large.' }, 413);
    }

    let payload: QuotePayload;
    try {
      payload = JSON.parse(rawText) as QuotePayload;
    } catch {
      return json({ ok: false, message: 'Invalid request body. Please try again.' }, 400);
    }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return json({ ok: false, message: 'Invalid request body. Please try again.' }, 400);
    }

    // 5. Server-side validation (authoritative, mirrors the client).
    const errors = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please fix the highlighted fields and try again.',
          errors,
        },
        { status: 400 },
      );
    }

    // Build the sanitized quote data from the validated payload. Only
    // allowlisted fields are forwarded; source is a sanitized, non-PII copy.
    const source = sanitizeSource(payload.source);
    const quote = {
      fullName: (payload.fullName as string).trim(),
      email: (payload.email as string).trim(),
      phone: (payload.phone as string).trim(),
      propertyType: payload.propertyType as string,
      serviceNeeded: payload.serviceNeeded as string,
      preferredDate:
        typeof payload.preferredDate === 'string' ? payload.preferredDate : undefined,
      preferredTime:
        typeof payload.preferredTime === 'string' ? payload.preferredTime : undefined,
      frequency: typeof payload.frequency === 'string' ? payload.frequency : undefined,
      message: typeof payload.message === 'string' ? payload.message : undefined,
      source,
    };

    // Unique reference id for this request (used in the email and response).
    const referenceId = `PN-${Date.now().toString(36).toUpperCase()}${Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase()}`;

    // Deliver the request email via Resend. On any failure (missing config,
    // invalid credentials, provider error) this throws and we return a safe,
    // generic 500 — never provider details, secrets, or a false success.
    await sendQuoteRequestEmail(quote, referenceId);

    return json(
      {
        ok: true,
        demo: false,
        message: "Your quote request has been received. We'll be in touch shortly.",
        referenceId,
      },
      200,
    );
  } catch {
    // Never leak internal details or PII to the client.
    return json(
      { ok: false, message: 'Something went wrong on our end. Please try again shortly.' },
      500,
    );
  }
}

/** Non-POST methods are not allowed. */
export function GET() {
  return NextResponse.json(
    { ok: false, message: 'Method not allowed. Use POST.' },
    { status: 405, headers: { Allow: 'POST' } },
  );
}
