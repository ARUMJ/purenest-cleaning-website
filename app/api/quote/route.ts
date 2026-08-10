import { NextResponse } from 'next/server';

/**
 * PureNest Cleaning Co. — Quote Request API
 *
 * DEMONSTRATION ROUTE — READ BEFORE CHANGING:
 *
 * This route intentionally does NOT do any of the following:
 *   - send email (no Resend, SendGrid, SMTP, or any mail provider)
 *   - store data in a database or CRM
 *   - call any external backend service
 *   - use API keys, secrets, or environment variables
 *
 * It validates the quote-request payload and returns a clear demo
 * response so the front-end QuoteForm can demonstrate loading,
 * validation, error, and success states end to end.
 *
 * WHEN REAL DELIVERY IS ADDED LATER:
 * Replace the body of POST() with the real integration (e.g. an
 * email/CRM provider) and keep the same request/response contract so
 * the front end does not need to change. Remove the simulated delay.
 *
 * Contract:
 *   POST /api/quote
 *   Body: { fullName, email, phone, propertyType, serviceNeeded,
 *           preferredDate, preferredTime, frequency, message }
 *   Success: 200 { ok: true, demo: true, message, referenceId }
 *   Validation error: 400 { ok: false, errors: { field: message } }
 */

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
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

/**
 * Validates the payload and returns a map of field errors. Mirrors
 * the client-side validation in components/QuoteForm.tsx.
 */
function validatePayload(payload: QuotePayload): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!isNonEmptyString(payload.fullName) || payload.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!isNonEmptyString(payload.email) || !EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.';
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
    if (
      typeof payload.preferredDate !== 'string' ||
      Number.isNaN(new Date(`${payload.preferredDate}T00:00:00`).getTime())
    ) {
      errors.preferredDate = 'Please choose a valid date.';
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

  if (typeof payload.message === 'string' && payload.message.length > 2000) {
    errors.message = 'Please keep your message under 2,000 characters.';
  }

  return errors;
}

export async function POST(request: Request) {
  // Simulated processing delay so the client-side loading state is
  // observable in this demonstration. Remove when real integration
  // is added.
  await new Promise((resolve) => setTimeout(resolve, 600));

  let payload: QuotePayload;
  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body. Please try again.' },
      { status: 400 },
    );
  }

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

  // Demo reference id only — no record is created or stored anywhere.
  const referenceId = `PN-${Date.now().toString(36).toUpperCase()}${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  return NextResponse.json(
    {
      ok: true,
      demo: true,
      message: 'We’ve received your request — our team will be in touch.',
      referenceId,
    },
    { status: 200 },
  );
}

export function GET() {
  return NextResponse.json(
    { ok: false, message: 'Method not allowed. Use POST.' },
    { status: 405 },
  );
}
