/**
 * PureNest Cleaning Co. — Provider-neutral analytics abstraction.
 *
 * IMPORTANT:
 *  - No analytics provider is installed or configured here.
 *  - No cookies are set and no PII is ever collected.
 *  - This module only defines a stable, provider-neutral event contract
 *    so a real analytics provider (e.g. Plausible, PostHog, GA4) can be
 *    wired in later by editing `trackEvent` — no component changes needed.
 *
 * Event names are deliberately small and non-PII. Context values should
 * be element labels, field names, or category strings — never names,
 * emails, phone numbers, or free-text user input.
 */

export type AnalyticsEventName =
  | 'cta_click'
  | 'quote_form_start'
  | 'quote_validation_error'
  | 'quote_submission_attempt'
  | 'quote_demo_submission_accepted'
  | 'quote_delivery_failure'
  | 'quote_network_failure'
  | 'phone_click'
  | 'email_click';

/** Non-PII context. Keys are arbitrary but values must never be PII. */
export type AnalyticsContext = Record<string, string | number | boolean | undefined>;

export const ANALYTICS_EVENT_ATTR = 'data-analytics-event';
export const ANALYTICS_LABEL_ATTR = 'data-analytics-label';

/**
 * Records a non-PII analytics event.
 *
 * Today this is a no-op production log hook. It is intentionally the
 * single seam where a real provider would be attached later.
 */
export function trackEvent(name: AnalyticsEventName, context?: AnalyticsContext): void {
  if (typeof window === 'undefined') return;

  // Provider-neutral. Replace this body with your provider's call when
  // one is configured. Never send the context values as-is to a system
  // that does not accept them without review.
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, context ?? {});
  }
}

/** Extracts a safely-typed event name, or null if not recognized. */
export function parseEventName(value: string): AnalyticsEventName | null {
  const known: readonly AnalyticsEventName[] = [
    'cta_click',
    'quote_form_start',
    'quote_validation_error',
    'quote_submission_attempt',
    'quote_demo_submission_accepted',
    'quote_delivery_failure',
    'quote_network_failure',
    'phone_click',
    'email_click',
  ];
  return (known as readonly string[]).includes(value) ? (value as AnalyticsEventName) : null;
}
