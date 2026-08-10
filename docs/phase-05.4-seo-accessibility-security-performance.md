# Phase 5.4 — SEO, Accessibility, Security, Performance & Analytics Readiness

Phase 5.4 hardens and polishes the Phase 5.3 PureNest Cleaning Co.
fictional portfolio website. It does **not** add analytics providers,
email/CRM providers, CAPTCHA, rate limiting, or a database, and it does
**not** change the approved copy, the design system, or the existing
images. PureNest remains a fictional portfolio / demonstration project
and stays excluded from search-engine indexes by default.

## 1. SEO

- **Environment-aware canonical URLs.** Removed the hard-coded fictional
  domain (`purenest.example`). `lib/site.ts` now resolves the site URL
  from `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → `http://localhost:3000`,
  and `absoluteUrl()` builds canonical/OG URLs from it.
- **`app/sitemap.ts`** generates a sitemap for all public routes.
- **`app/robots.ts`** generates environment-aware `robots.txt`.
- **Indexing controls.** `lib/indexing.ts` keeps the site
  `noindex, follow` by default; `NEXT_PUBLIC_ENABLE_INDEXING=true` opts
  in (also flips `robots.txt` to `Allow`).
- **Open Graph / social metadata.** `app/opengraph-image.tsx` generates a
  branded 1200×630 OG image with `next/og`; root metadata and
  `lib/seo.ts` build the OG/Twitter tags from the environment URL.
- No invented business information, ratings, addresses, or certifications.

## 2. Accessibility

- **Skip-to-content link** added in the root layout (`#main`).
- **`aria-labelledby` relationships fixed.** `SectionHeading` now accepts
  an `id`; every section whose `aria-labelledby` referenced a heading id
  now actually has that id (homepage, services hub, about, service
  detail, service areas, FAQ).
- **Mobile navigation focus handling.** The `MobileNav` dialog now traps
  focus (Tab/Shift+Tab), uses `aria-labelledby` for its visible "Menu"
  heading, and still restores focus to the trigger on close.
- **Form error summary + focus.** `QuoteForm` shows a focusable error
  summary with per-field links and moves focus to the first invalid
  field on validation failure.
- Keyboard navigation preserved; existing focus-visible styles retained.

## 3. Quote API hardening (still a demonstration)

`app/api/quote/route.ts` remains a **demo** (no email/CRM/DB/external
service/CAPTCHA/rate-limit/analytics). Hardening added:

- Method validation (non-POST → `405` with `Allow: POST`).
- Content-type validation (non-JSON → `415`).
- Body-size protection (→ `413`, 32 KB cap).
- Same-origin protection (cross-origin/cross-site → `403`).
- Server-side validation including date constraints (→ `400`).
- Safe, generic error responses; no PII logged; no internal detail
  leaked.
- Honest messaging — the success response clearly states it is a demo
  submission and that no real message was sent or stored.

## 4. Error handling

- **`app/error.tsx`** — branded segment error boundary with "Try Again"
  and "Back to Home".
- **`app/global-error.tsx`** — branded root error boundary.
- The existing branded **404** is preserved.
- `QuoteForm` distinguishes network failures from server errors and shows
  safe messages only.

## 5. Security headers

Added in `next.config.mjs` via the App Router `headers()`:

`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
`X-Frame-Options`, and a Content-Security-Policy covering
`frame-ancestors`, `base-uri`, `form-action`, `object-src`, etc. The CSP
is deliberately kept compatible with Next.js inline scripts/styles, the
self-hosted fonts, image optimization, and the same-origin quote API.

## 6. Performance / dependencies

- Upgraded **Next.js 14.2.15 → 14.2.35** (latest patch in the 14.2 line;
  fixes the earlier CVE set while keeping React 18.3.1 and Node 22
  compatible). No blind major upgrade: Next 15.5.21+/16.x would require
  an async-params/React 19 rewrite, contradicting the "do not blindly
  upgrade" guidance.
- Pinned **postcss** to a patched version (`^8.5.23`, resolves to
  `8.5.26`) via a direct dev dependency and an npm `overrides` entry.
- Verified `typecheck`, `lint`, and a clean production build; exercised
  every route, image optimization, the quote API, and the generated SEO
  endpoints.
- Fonts remain the documented self-hosted setup with a system-font
  fallback (the woff2 files are optional; the site builds and renders
  without them).

## 7. Conversion improvements

- **Service preselect:** service-detail CTAs link to
  `/contact?service=<name>`, and `QuoteForm` preselects that service.
- **Safe source/UTM context:** optional non-PII `source` (service + UTM)
  is passed through and sanitized; never stored.
- **Sensible date constraints:** preferred date is limited to today →
  +1 year (client and server).
- No fake urgency, discounts, ratings, guarantees, response-time
  promises, or testimonials.

## 8. Analytics readiness (provider-neutral)

`lib/analytics.ts` defines a non-PII event contract and `trackEvent()`
single seam. `components/AnalyticsTracker.tsx` mounts a delegated
listener for `data-analytics-event` attributes. Events: `cta_click`,
`quote_form_start`, `quote_validation_error`, `quote_submission_attempt`,
`quote_demo_submission_accepted`, `quote_delivery_failure`,
`quote_network_failure`, `phone_click`, `email_click`.
No provider, no cookies, no PII.

## 9. Privacy / indexing

PureNest remains clearly disclosed as a fictional portfolio/demo project,
and indexing stays disabled by default (`noindex, follow` + `robots.txt`
`Disallow: /`).

## 10. Validation

`npm run typecheck`, `npm run lint`, and `npm run build` pass. All public
routes, all five service routes, the custom 404, sitemap, robots.txt,
metadata/canonical output, quote API, API validation failures, security
headers, image loading, mobile navigation, accessibility relationships,
and service-specific quote preselection were verified locally.
