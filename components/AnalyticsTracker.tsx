'use client';

import { useEffect } from 'react';
import {
  ANALYTICS_EVENT_ATTR,
  ANALYTICS_LABEL_ATTR,
  parseEventName,
  trackEvent,
} from '@/lib/analytics';

/**
 * AnalyticsTracker — client component that mounts a single delegated
 * click listener for the whole document.
 *
 * Any element (a link, button, or clickable region) can emit a
 * non-PII event simply by adding:
 *
 *   data-analytics-event="cta_click" data-analytics-label="Get a Free Quote"
 *
 * This keeps the instrumentation declarative and provider-neutral:
 * there is no per-element JS, no cookies, and no PII.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest?.(`[${ANALYTICS_EVENT_ATTR}]`);
      if (!element) return;

      const rawName = element.getAttribute(ANALYTICS_EVENT_ATTR);
      if (!rawName) return;

      const name = parseEventName(rawName);
      if (!name) return;

      const label = element.getAttribute(ANALYTICS_LABEL_ATTR) ?? undefined;
      trackEvent(name, label ? { label } : undefined);
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return null;
}
