'use client';

import { useId, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import {
  frequencyOptions,
  propertyTypeOptions,
  serviceOptions,
} from '@/lib/quote-options';

/**
 * QuoteForm — client component.
 *
 * Collects the approved quote-request fields (Phase 2 §16 / Phase 3
 * §21) and POSTs them to the quote API route at `/api/quote`.
 *
 * Phase 5.5: the API route now delivers real quote-request emails via
 * Resend. On success the form shows the genuine success state
 * ("Quote Request Received") with the reference id; on failure it shows
 * the safe server message. Only the API route changed for this — the
 * front-end request/response contract is unchanged.
 *
 * Phase 5.4 additions:
 *  - `defaultService` preselects the service (set by the service-detail
 *    CTAs via ?service=…).
 *  - Date input is constrained to today → +1 year.
 *  - Validation shows a focusable error summary and moves focus to the
 *    first invalid field (accessible error reporting).
 *  - Provider-neutral, non-PII analytics events are emitted (see
 *    lib/analytics.ts). No cookies, no PII, no provider.
 */

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTime: string;
  frequency: string;
  message: string;
};

type FieldName = keyof FormValues;

type FieldErrors = Partial<Record<FieldName, string>>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export type QuoteSource = {
  service?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

type Props = {
  /** Optional pre-selected service (matches a `serviceOptions` value). */
  defaultService?: string;
  /** Optional safe, non-PII source/UTM context forwarded to the API. */
  source?: QuoteSource;
};

const emptyValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  serviceNeeded: '',
  preferredDate: '',
  preferredTime: '',
  frequency: '',
  message: '',
};

const inputClasses =
  'w-full rounded-btn border border-border bg-cream/60 px-4 py-3 text-body text-charcoal placeholder:text-muted/60 transition-colors duration-200 focus:border-forest focus:bg-surface focus:outline-none focus:ring-2 focus:ring-forest/30 disabled:cursor-not-allowed disabled:opacity-60';

const labelClasses = 'block text-small font-semibold text-charcoal';

/** Local-date helpers (yyyy-mm-dd) for the date picker constraints. */
function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function todayIso(): string {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return toIsoDate(now);
}

function maxDateIso(): string {
  const max = new Date();
  max.setHours(0, 0, 0, 0);
  max.setFullYear(max.getFullYear() + 1);
  return toIsoDate(max);
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Your name needs at least 2 characters.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.propertyType) {
    errors.propertyType = 'Please choose a property type.';
  }
  if (!values.serviceNeeded) {
    errors.serviceNeeded = 'Please choose a service.';
  }

  if (values.preferredDate) {
    const parsed = new Date(`${values.preferredDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      errors.preferredDate = 'Please choose a valid date.';
    } else {
      const min = todayIso();
      const max = maxDateIso();
      if (values.preferredDate < min) {
        errors.preferredDate = 'Please choose a date from today onwards.';
      } else if (values.preferredDate > max) {
        errors.preferredDate = 'Please choose a date within the next year.';
      }
    }
  }
  if (values.preferredTime && !/^([01]\d|2[0-3]):[0-5]\d$/.test(values.preferredTime)) {
    errors.preferredTime = 'Please choose a valid time.';
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-small font-medium text-red-700">
      {message}
    </p>
  );
}

export default function QuoteForm({ defaultService = '', source }: Props) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(() => ({
    ...emptyValues,
    serviceNeeded: defaultService,
  }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submitting = status === 'submitting';
  const fieldErrorNames = Object.keys(errors) as FieldName[];

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('quote_form_start');
    }
  };

  const focusField = (field: FieldName) => {
    document.getElementById(`${formId}-${field}`)?.focus();
  };

  const setField = (field: FieldName, value: string) => {
    markStarted();
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the field error as soon as the user corrects it.
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markStarted();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setServerMessage(null);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      // Report the first validation failure as a non-PII event.
      const first = Object.keys(nextErrors)[0] as FieldName;
      trackEvent('quote_validation_error', { field: first });
      focusField(first);
      return;
    }

    setStatus('submitting');
    trackEvent('quote_submission_attempt', {
      service: values.serviceNeeded || undefined,
      hasMessage: values.message.trim().length > 0,
    });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        referenceId?: string;
        errors?: FieldErrors;
      };

      if (response.ok && data.ok) {
        setReferenceId(data.referenceId ?? null);
        setStatus('success');
        trackEvent('quote_submission_accepted', {
          service: values.serviceNeeded || undefined,
        });
      } else {
        if (data.errors) {
          setErrors(data.errors);
          const first = Object.keys(data.errors)[0] as FieldName;
          trackEvent('quote_validation_error', { field: first });
        }
        setServerMessage(
          data.message ?? 'Something went wrong with your request. Please try again.',
        );
        setStatus('error');
        trackEvent('quote_delivery_failure');
      }
    } catch {
      setServerMessage('We couldn’t reach the server. Please try again in a moment.');
      setStatus('error');
      trackEvent('quote_network_failure');
    }
  };

  const resetForm = () => {
    setValues((prev) => ({ ...emptyValues, serviceNeeded: defaultService }));
    setErrors({});
    setServerMessage(null);
    setReferenceId(null);
    setStatus('idle');
    startedRef.current = false;
  };

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0] || '';
    return (
      <div
        className="card flex h-full flex-col items-start p-8 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>

        <h3 className="h3-default mt-6">Quote Request Received</h3>
        <p className="mt-3 max-w-md text-body text-charcoal/85 text-pretty">
          Thank you, {firstName}. Your request has been received successfully.
        </p>

        {referenceId ? (
          <p className="mt-4 rounded-btn bg-sand/30 px-4 py-2 text-small text-charcoal">
            Reference: <span className="font-semibold">{referenceId}</span>
          </p>
        ) : null}

        <p className="mt-5 max-w-md text-small text-muted text-pretty">
          We&apos;ll be in touch shortly.
        </p>

        <button type="button" onClick={resetForm} className="btn-secondary mt-8">
          Submit Another Request
        </button>
      </div>
    );
  }

  const errorSummary = serverMessage ? (
    <div
      role="alert"
      className="rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-small font-medium text-red-800"
    >
      {serverMessage}
    </div>
  ) : null;

  const validationSummary = fieldErrorNames.length > 0 ? (
    <div
      role="alert"
      className="rounded-btn border border-red-200 bg-red-50 px-4 py-4"
      aria-label="Please fix the following"
    >
      <p className="text-small font-semibold text-red-800">
        Please fix the highlighted fields to continue:
      </p>
      <ul className="mt-2 space-y-1.5">
        {fieldErrorNames.map((field) => (
          <li key={field}>
            <button
              type="button"
              onClick={() => focusField(field)}
              className="text-left text-small font-medium text-red-700 underline decoration-red-300 underline-offset-2 hover:text-red-900"
            >
              {errors[field]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="h3-default" id={`${formId}-title`}>
          Request Your Free Quote
        </h2>
        <p className="text-small text-muted">No obligation. Just tell us what you need.</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby={`${formId}-title`}
        className="mt-7"
      >
        {errorSummary}
        {validationSummary}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-fullName`} className={labelClasses}>
              Full Name <span aria-hidden="true" className="text-forest">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <input
              id={`${formId}-fullName`}
              type="text"
              name="fullName"
              autoComplete="name"
              value={values.fullName}
              onChange={(e) => setField('fullName', e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
              placeholder="Jordan Smith"
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${errors.fullName ? 'border-red-300 bg-red-50/40' : ''}`}
            />
            <FieldError id={`${formId}-fullName-error`} message={errors.fullName} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor={`${formId}-email`} className={labelClasses}>
              Email Address <span aria-hidden="true" className="text-forest">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => setField('email', e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${formId}-email-error` : undefined}
              placeholder="jordan@example.com"
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${errors.email ? 'border-red-300 bg-red-50/40' : ''}`}
            />
            <FieldError id={`${formId}-email-error`} message={errors.email} />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor={`${formId}-phone`} className={labelClasses}>
              Phone Number <span aria-hidden="true" className="text-forest">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <input
              id={`${formId}-phone`}
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={values.phone}
              onChange={(e) => setField('phone', e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
              placeholder="(214) 555-0100"
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${errors.phone ? 'border-red-300 bg-red-50/40' : ''}`}
            />
            <FieldError id={`${formId}-phone-error`} message={errors.phone} />
          </div>

          {/* Property Type */}
          <div>
            <label htmlFor={`${formId}-propertyType`} className={labelClasses}>
              Property Type <span aria-hidden="true" className="text-forest">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <select
              id={`${formId}-propertyType`}
              name="propertyType"
              value={values.propertyType}
              onChange={(e) => setField('propertyType', e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.propertyType)}
              aria-describedby={errors.propertyType ? `${formId}-propertyType-error` : undefined}
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${values.propertyType ? '' : 'text-muted/70'} ${
                errors.propertyType ? 'border-red-300 bg-red-50/40' : ''
              }`}
            >
              <option value="" disabled>
                Select property type
              </option>
              {propertyTypeOptions.map((option) => (
                <option key={option} value={option} className="text-charcoal">
                  {option}
                </option>
              ))}
            </select>
            <FieldError id={`${formId}-propertyType-error`} message={errors.propertyType} />
          </div>

          {/* Service Needed */}
          <div>
            <label htmlFor={`${formId}-serviceNeeded`} className={labelClasses}>
              Service Needed <span aria-hidden="true" className="text-forest">*</span>
              <span className="sr-only"> (required)</span>
            </label>
            <select
              id={`${formId}-serviceNeeded`}
              name="serviceNeeded"
              value={values.serviceNeeded}
              onChange={(e) => setField('serviceNeeded', e.target.value)}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.serviceNeeded)}
              aria-describedby={errors.serviceNeeded ? `${formId}-serviceNeeded-error` : undefined}
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${values.serviceNeeded ? '' : 'text-muted/70'} ${
                errors.serviceNeeded ? 'border-red-300 bg-red-50/40' : ''
              }`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="text-charcoal">
                  {option}
                </option>
              ))}
            </select>
            <FieldError id={`${formId}-serviceNeeded-error`} message={errors.serviceNeeded} />
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor={`${formId}-preferredDate`} className={labelClasses}>
              Preferred Date
            </label>
            <input
              id={`${formId}-preferredDate`}
              type="date"
              name="preferredDate"
              value={values.preferredDate}
              min={todayIso()}
              max={maxDateIso()}
              onChange={(e) => setField('preferredDate', e.target.value)}
              aria-invalid={Boolean(errors.preferredDate)}
              aria-describedby={errors.preferredDate ? `${formId}-preferredDate-error` : undefined}
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${errors.preferredDate ? 'border-red-300 bg-red-50/40' : ''}`}
            />
            <FieldError id={`${formId}-preferredDate-error`} message={errors.preferredDate} />
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor={`${formId}-preferredTime`} className={labelClasses}>
              Preferred Time
            </label>
            <input
              id={`${formId}-preferredTime`}
              type="time"
              name="preferredTime"
              value={values.preferredTime}
              onChange={(e) => setField('preferredTime', e.target.value)}
              aria-invalid={Boolean(errors.preferredTime)}
              aria-describedby={errors.preferredTime ? `${formId}-preferredTime-error` : undefined}
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${errors.preferredTime ? 'border-red-300 bg-red-50/40' : ''}`}
            />
            <FieldError id={`${formId}-preferredTime-error`} message={errors.preferredTime} />
          </div>

          {/* Frequency */}
          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-frequency`} className={labelClasses}>
              Frequency
            </label>
            <select
              id={`${formId}-frequency`}
              name="frequency"
              value={values.frequency}
              onChange={(e) => setField('frequency', e.target.value)}
              disabled={submitting}
              className={`mt-2 ${inputClasses} ${values.frequency ? '' : 'text-muted/70'}`}
            >
              <option value="" disabled>
                Select how often you’d like cleaning
              </option>
              {frequencyOptions.map((option) => (
                <option key={option} value={option} className="text-charcoal">
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-message`} className={labelClasses}>
              Message / Additional Details
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={5}
              value={values.message}
              onChange={(e) => setField('message', e.target.value)}
              placeholder="Tell us about your space, any specific areas to focus on, or anything else we should know."
              disabled={submitting}
              className={`mt-2 ${inputClasses} resize-y`}
            />
          </div>
        </div>

        <div className="mt-8">
          <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60">
            {submitting ? (
              <>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
                </svg>
                Sending request…
              </>
            ) : (
              'Request My Free Quote'
            )}
          </button>
        </div>

        <p className="mt-5 text-small text-muted text-pretty">
          We&apos;ll only use your details to prepare your quote and respond to your request.
        </p>
      </form>
    </div>
  );
}
