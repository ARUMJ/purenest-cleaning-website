# PureNest Cleaning Co. — Phase 2: Sitemap & Information Architecture

> **Status:** Phase 2 — Sitemap & Information Architecture
> **Phase:** Information Architecture
> **Last Updated:** 2026-08-09
> **Project Type:** Fictional portfolio / concept website
> **Disclaimer:** This is a fictional project. It must never be presented as a real client or as a real business.

This document defines the approved information architecture for the PureNest Cleaning Co. website. It builds on the Phase 1 Project Brief and is the source of truth for site structure, navigation, page contents, internal linking, and conversion paths for Version 1.

---

## 1. Project Architecture

The website is a **multi-page local-business marketing and lead-generation website**.

**Primary conversion goal:**
Generate qualified quote requests.

**Primary CTA:**
**Get a Free Quote**

All page architecture, navigation, and content should be organized to support this goal.

---

## 2. Primary Navigation

### Desktop Navigation

- Home
- Services
- About
- Service Areas
- Contact
- **Get a Free Quote** *(prominent button/CTA)*

### Mobile Navigation

- Home
- Services
- About
- Service Areas
- Contact
- **Get a Free Quote** *(prominent button/CTA)*

> The quote CTA should remain visually prominent on mobile.

The same set of primary links is used on desktop and mobile. The quote CTA is styled as a prominent action in both contexts.

---

## 3. Main Sitemap

### Primary Pages

| Page        | URL         |
|-------------|-------------|
| Home        | `/`         |
| Services    | `/services` |
| About       | `/about`    |
| Service Areas | `/service-areas` |
| Contact     | `/contact`  |

### Individual Service Pages

| Service                         | URL                                          |
|---------------------------------|----------------------------------------------|
| Residential Cleaning            | `/services/residential-cleaning`            |
| Deep Cleaning                   | `/services/deep-cleaning`                    |
| Move-In / Move-Out Cleaning     | `/services/move-in-move-out-cleaning`        |
| Airbnb Cleaning                 | `/services/airbnb-cleaning`                  |
| Commercial Cleaning             | `/services/commercial-cleaning`              |

URLs are descriptive, lowercase, hyphenated, and SEO-friendly.

---

## 4. Homepage Information Architecture

The homepage should contain the following sections, in order:

1. **Header** (with primary navigation)
2. **Hero**
3. **Trust / credibility section**
4. **Services overview**
5. **Why PureNest**
6. **How It Works**
7. **About / brand story**
8. **Testimonials / sample testimonial component**
9. **Service Areas**
10. **FAQ**
11. **Final CTA**
12. **Footer**

Each section is defined in detail below.

---

## 5. Hero

The hero must immediately communicate:

- **What** PureNest does
- **Where** it operates
- **Why** customers should care
- **Primary action**

**Primary CTA:** `Get a Free Quote`
**Secondary CTA:** `Explore Our Services`

---

## 6. Trust Section

Use appropriate trust signals such as:

- Professional service
- Reliability
- Attention to detail
- Local service
- Customer satisfaction

> Because PureNest is fictional, **do not invent** genuine customer claims, ratings, awards, statistics, or business results.

---

## 7. Services Overview

The homepage services section uses service cards for the following five offerings:

- Standard Home Cleaning
- Deep Cleaning
- Move-In / Move-Out Cleaning
- Airbnb & Short-Term Rental Cleaning
- Commercial Cleaning

Each service card should link to its corresponding service page (see sitemap above).

---

## 8. Why PureNest

Highlight brand-positioning benefits such as:

- Reliable Service
- Detail-Focused
- Flexible Services
- Local Service

> These are fictional concept positioning statements, not verified real-world claims.

---

## 9. How It Works

A three-step process explaining how a customer engages with PureNest:

1. **Request Your Quote**
2. **Choose Your Service**
3. **Enjoy a Fresher Space**

The section should include a CTA to request a quote.

---

## 10. About Section (Homepage)

The homepage should contain a short About/brand-story introduction with a link to the full About page.

### About Page (`/about`) Structure

- Hero
- Our Story
- Our Approach
- Our Values
- Why Customers Choose Us
- CTA

> Do not invent an elaborate fake company history.

---

## 11. Testimonials

The homepage should include a testimonial section or testimonial component.

> Because this is a fictional portfolio project, testimonials must be clearly treated as fictional/demo content and must never be represented as genuine reviews.

---

## 12. Service Areas

### Homepage

The homepage should introduce the Dallas-area service region.

Concept / demo locations may include:

- Dallas
- Plano
- Frisco
- Irving
- Richardson
- Carrollton

> These are fictional project assumptions and must not be presented as verified claims about a real company.

### Full Page — `/service-areas`

**Structure:**

- Hero
- Primary service area
- Cities / communities
- Local service explanation
- CTA

---

## 13. FAQ (Homepage)

The homepage FAQ should address:

- Services offered
- Recurring cleaning
- Deep cleaning
- Office cleaning
- Move-in / move-out cleaning
- Quote process
- Service areas

Answers should be concise and useful.

---

## 14. Services Hub — `/services`

The services hub is the gateway to the individual service pages.

**Structure:**

- Hero
- Services overview
- Why choose PureNest
- How it works
- FAQ
- CTA

---

## 15. Individual Service Pages

Each of the five service pages uses a **reusable architecture**:

- Hero
- Service introduction
- What's included
- Who it's for
- Benefits
- Process
- FAQ
- CTA

| Service Page                                       | URL                                          |
|----------------------------------------------------|----------------------------------------------|
| Residential Cleaning                               | `/services/residential-cleaning`            |
| Deep Cleaning                                      | `/services/deep-cleaning`                    |
| Move-In / Move-Out Cleaning                        | `/services/move-in-move-out-cleaning`        |
| Airbnb Cleaning                                    | `/services/airbnb-cleaning`                  |
| Commercial Cleaning                                | `/services/commercial-cleaning`              |

Each service page also links back to `/services` and forward to `/contact` to keep the conversion path clear.

---

## 16. Contact / Quote Page — `/contact`

### Quote Form Fields

- Name
- Email
- Phone
- Service Needed
- Property Type
- Preferred Service Date
- Message / Cleaning Details

### Service Options (Service Needed)

- Residential Cleaning
- Deep Cleaning
- Move-In / Move-Out
- Airbnb Cleaning
- Commercial Cleaning
- Other

### Property Options (Property Type)

- House
- Apartment
- Office
- Short-Term Rental
- Other

### Primary Form CTA

**`Request My Free Quote`**

> For Version 1, the form is primarily a **front-end demonstration**. Do not build authentication, payments, databases, or complex booking functionality.

---

## 17. Footer

The footer should contain:

- PureNest brand / description
- Quick links
- Service links
- Contact information placeholders
- Social links / icons
- Privacy Policy
- Terms
- Copyright

> Do not use real businesses' contact information. All contact details should be clearly fictional/demo placeholders.

---

## 18. Internal Linking

The architecture should support logical navigation between pages:

- **Home** → Services → Individual Service → Contact
- **Home** → Service Areas → Contact
- **Home** → About → Contact
- Individual service pages → Contact
- Services → individual service pages

These are the canonical user flows the site should support naturally via in-content links and navigation.

---

## 19. Conversion Architecture

The primary conversion action throughout the website is:

**`Get a Free Quote`**

Secondary navigation/actions should never compete excessively with the primary CTA. The quote CTA should be the most visually and structurally prominent interactive element on every page.

---

## 20. UX Principles

The information architecture should prioritize:

- Clarity
- Simple navigation
- Minimal friction
- Logical hierarchy
- Strong conversion paths
- Mobile usability
- Accessibility
- SEO-friendly structure

---

## 21. Project Scope

The approved website architecture contains:

**5 primary pages:**

1. Home — `/`
2. Services — `/services`
3. About — `/about`
4. Service Areas — `/service-areas`
5. Contact — `/contact`

**5 individual service pages:**

1. Residential Cleaning — `/services/residential-cleaning`
2. Deep Cleaning — `/services/deep-cleaning`
3. Move-In / Move-Out Cleaning — `/services/move-in-move-out-cleaning`
4. Airbnb Cleaning — `/services/airbnb-cleaning`
5. Commercial Cleaning — `/services/commercial-cleaning`

**Total: 10 pages.**

---

## 22. Documentation Quality Checklist

Review the document for:

- [x] Completeness — every required section is present
- [x] Consistency — terminology matches Phase 1 (PureNest, services, CTAs)
- [x] Clear Markdown formatting
- [x] Correct URLs (lowercase, hyphenated, descriptive)
- [x] Consistent terminology (Primary CTA, Service Areas, etc.)
- [x] Alignment with Phase 1 (brand voice, fictional-disclaimer language, scope)

> The approved business strategy from Phase 1 is preserved and not altered.

---

## Phase 2 Checklist

- [x] Project architecture defined
- [x] Primary navigation specified (desktop + mobile)
- [x] Full sitemap documented (primary + service pages)
- [x] Homepage section architecture specified
- [x] Hero, Trust, Services Overview, Why PureNest, How It Works, About, Testimonials, Service Areas, FAQ defined
- [x] Services hub architecture specified
- [x] Individual service page reusable architecture defined
- [x] Contact / quote form fields and options specified
- [x] Footer structure defined
- [x] Internal linking flows documented
- [x] Conversion architecture clarified
- [x] UX principles listed
- [x] Project scope quantified (5 + 5 = 10 pages)
- [x] Fictional / disclaimer guidelines carried over from Phase 1

---

## Next Phase

**Phase 3 — Content Strategy**

(This document will be created in a separate phase. Do not begin until the current phase is reviewed and approved.)
