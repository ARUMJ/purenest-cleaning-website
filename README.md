# PureNest Cleaning Co. — Website

A **fictional portfolio website** for a Dallas-area residential and commercial cleaning company, demonstrating a professional local-business marketing site.

> **Disclaimer:** This is a fictional project. It must never be presented as a real client or as a real business. All contact details, service-area coverage, and testimonials are clearly labeled demo / concept content.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- No UI framework or icon library — the design system is implemented with the approved Phase 4A tokens (Forest `#173F35`, Sage `#8FAF9F`, Soft Sand `#DCC9A3`, Cream `#F7F6F1`, Charcoal `#26322E`, Muted `#66736D`).

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | App Router pages (homepage, services, service details, about, service areas, contact, 404, API) |
| `components/` | Shared UI components (Header, Footer, ServiceCard, FAQ, QuoteForm, PageHero, …) |
| `data/homepage.ts` | Homepage content — single source of truth for approved copy |
| `data/services.ts` | Service page content (built on top of `data/homepage.ts`) |
| `data/pages.ts` | Inner page content (about, service areas, contact, 404) |
| `docs/` | Approved phase documentation (1 → 4B.1) |
| `public/images/` | SVG illustrations used across the site |

## Routes

- `/` — Home
- `/services` — Services hub
- `/services/residential-cleaning`
- `/services/deep-cleaning`
- `/services/move-in-move-out-cleaning`
- `/services/airbnb-cleaning` (kept as the approved URL — not renamed)
- `/services/commercial-cleaning`
- `/about`
- `/service-areas`
- `/contact` — Request a Free Quote (QuoteForm)
- `/api/quote` — **demonstration** quote API (POST)
- `not-found` — custom 404

## Quote form / API

The quote form (`components/QuoteForm.tsx`) posts to `app/api/quote/route.ts`.

This is currently a **demonstration flow**: the API validates the payload and returns a demo success response. It does **not** send email (no Resend / SendGrid / SMTP), does not store data, and uses no API keys or external services. Real email/CRM integration is documented in the route and will be added later without changing the front-end contract.

## Commands

```bash
npm install
npm run dev        # development server
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run build      # production build
npm start          # serve production build
```

## Phase status

- ✅ **Phase 5.1** — Homepage built in Next.js (App Router, TypeScript, Tailwind)
- ✅ **Phase 5.2** — Inner pages, quote form, demonstration API, custom 404
- ⬜ Later phases — real email/CRM integration, additional pages
