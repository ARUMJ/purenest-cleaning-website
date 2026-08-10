# PureNest Cleaning Co. — Phase 4B.1: Homepage UI Specification

> **Status:** Phase 4B.1 — Homepage UI Specification
> **Phase:** Design (Page-Level Specification)
> **Page:** Home (`/`)
> **Last Updated:** 2026-08-09
> **Project Type:** Fictional portfolio / concept website
> **Disclaimer:** This is a fictional project. It must never be presented as a real client or as a real business.

This document specifies the homepage UI for PureNest Cleaning Co. It is consistent with the Phase 1 Project Brief, Phase 2 Sitemap & Information Architecture, Phase 3 Content Strategy, and Phase 4A Design Direction & Design System. It does **not** contain implementation code — only design intent, structural specification, content placement, responsive behavior, accessibility requirements, and a final brief suitable for downstream tooling (e.g. Stitch).

---

## 1. Project Context

**Brand:** PureNest Cleaning Co.
**Project type:** Fictional portfolio project demonstrating a professional local cleaning-business website.
**Primary objective:** Generate quote inquiries.
**Primary CTA:** `Get a Free Quote`
**Secondary CTA:** `Explore Our Services`

**Visual direction (from Phase 4A):**
Modern • Premium • Warm • Natural • Trustworthy • Local • Minimal.

The homepage must **not** look like a generic AI-generated cleaning template. It should feel like a premium modern home-service brand, drawing on modern-hospitality aesthetics combined with professional local-service tone.

---

## 2. Approved Design System (Reference)

The following tokens are fixed and reused throughout this specification. They are reproduced here for self-contained reference but originate in **Phase 4A**.

| Role             | Name              | Hex       |
|------------------|-------------------|-----------|
| **Primary**      | Deep Forest Green | `#173F35` |
| **Secondary**    | Sage              | `#8FAF9F` |
| **Background**   | Warm Off-White    | `#F7F6F1` |
| **Surface**      | Pure White        | `#FFFFFF` |
| **Accent**       | Soft Sand         | `#DCC9A3` |
| **Primary Text** | Charcoal          | `#26322E` |
| **Muted Text**   | Muted             | `#66736D` |

**Body font:** DM Sans
**Display font:** Playfair Display (selective, editorial headings only)
**Container:** 1200–1280px desktop maximum width
**Border radius:** 8–16px depending on component
**Spacing philosophy:** Generous whitespace throughout

---

## 3. Homepage Structure (Section Order)

The homepage must contain the following sections **in this exact order**:

1. Header
2. Hero
3. Trust / Credibility
4. Services Overview
5. Why PureNest
6. How It Works
7. About PureNest
8. Testimonials
9. Service Areas
10. FAQ
11. Final CTA
12. Footer

Each section is specified in detail below.

---

## 4. Section 1 — Header

### Purpose
Provide persistent navigation, brand identity, and an immediately accessible path to the primary conversion action (`Get a Free Quote`).

### Visual Structure
- Clean, premium, spacious navigation bar.
- White or warm off-white surface.
- A subtle bottom border or hairline divider may be used for separation.
- The header must **not** feel visually heavy.

### Desktop Layout
Left → Right:

1. **PureNest logo / wordmark**
2. Primary navigation links: Home · Services · About · Service Areas · Contact
3. **Primary CTA button:** `Get a Free Quote` (visually stronger than navigation links)

Generous horizontal spacing between elements.

### Mobile Layout
- Logo (left) + menu button (right)
- Menu expands into a panel containing:
  - Home
  - Services
  - About
  - Service Areas
  - Contact
  - `Get a Free Quote` (CTA must remain visually prominent at or near the top of the expanded menu)

### Interaction Behavior
- **Sticky / persistent header:** recommended as a UX behavior. The header should remain accessible as the user scrolls. This is a UX recommendation; final implementation choice is deferred to the build phase.
- Mobile menu must support keyboard focus trapping, ESC to close, and a clear close affordance.

### Accessibility
- Semantic `<nav>` landmark.
- Current page indicated via `aria-current="page"`.
- Visible focus state on all interactive elements.
- CTA button is a real `<button>` (or styled link with role) and is reachable by keyboard.

---

## 5. Section 2 — Hero

### Purpose
The most important section of the homepage. It must immediately communicate **what, where, why, and action**.

### Required Communication
- **WHAT:** Professional cleaning services
- **WHERE:** Dallas-area service
- **WHY:** A fresher space and more time for the customer
- **ACTION:** Request a quote

### Approved Content (Phase 3, reproduced exactly)

**Eyebrow:**
`DALLAS AREA CLEANING SERVICES`

**Primary heading:**

> "Professional Cleaning.
> A Fresher Space.
> More Time for You."

> The heading is broken into three lines for editorial rhythm. The display font (Playfair Display) may be applied selectively to this H1 to reinforce the premium positioning.

**Supporting copy:**

> "Reliable residential and commercial cleaning services designed to keep your space fresh, comfortable, and ready for what comes next."

**Primary CTA:** `Get a Free Quote`
**Secondary CTA:** `Explore Our Services`

**Reassurance treatment (beneath the CTAs):**
A small, restrained set of reassurance markers, e.g.:

- Reliable service
- Flexible cleaning options
- Local service

> Do **not** invent factual claims such as years of experience, customer counts, awards, certifications, or ratings.

### Hero Layout — Desktop

Editorial two-column composition.

- **Left column:** Eyebrow → Heading → Supporting copy → Primary CTA → Secondary CTA → Reassurance markers.
- **Right column:** Large premium cleaning / interior photograph.

The image should feel natural and sophisticated. Avoid:

- Cleaning workers posing at the camera
- Spray bottles prominently displayed
- Unrealistic luxury homes
- Overly stock-photo appearance
- Artificial-looking people

The hero image should have rounded corners consistent with the design system (12–16px).

### Hero Layout — Mobile

Vertical stack in this order:

1. Eyebrow
2. Heading
3. Supporting copy
4. Primary CTA
5. Secondary CTA
6. Hero image (below the text block)

The heading must remain visually dominant without forcing excessive vertical scrolling. Buttons must be touch-friendly.

### Spacing
Use generous vertical spacing between eyebrow → heading → supporting copy → CTAs. The hero section should breathe — it should **not** feel cramped.

### Accessibility
- H1 is the only H1 on the homepage and describes the page's primary message.
- Image has meaningful alt text describing the interior / cleaning scene.
- CTAs are real buttons or styled links reachable by keyboard.
- Color contrast verified for charcoal on warm off-white and white on forest green.

---

## 6. Section 3 — Trust / Credibility

### Purpose
Establish confidence immediately after the hero — without misrepresenting fictional content as real.

### Fictional-Project Safeguard
Because PureNest is fictional:

- **DO NOT** fabricate real statistics.
- **DO NOT** display fake review counts, fake star ratings, fake customer numbers, fake years in business, fake certifications, or fake awards.

### Trust Themes (Approved Positioning Statements)

Use a design pattern that communicates the *types* of trust signals a real cleaning business could use. Approved positioning themes from Phase 1 / 3:

- Professional service
- Detail-focused cleaning
- Flexible service options
- Local service

### Visual Treatment
- Subtle, restrained presentation.
- **Do not** make this section look like a SaaS logo strip.
- Avoid oversized numerals, animated counters, or "as seen in" patterns.

### Layout
- A calm, balanced row or grid of trust markers (e.g. typographic markers or restrained icons).
- Markers carry short labels and one-line descriptions where appropriate.

### Accessibility
- Each trust marker is a meaningful group with a heading or label.
- Icons (if used) are decorative (`aria-hidden="true"`) with text labels carrying the meaning.

---

## 7. Section 4 — Services Overview

### Purpose
Introduce the five services and route visitors to the individual service pages.

### Approved Content (Phase 3)

**Eyebrow:** `OUR SERVICES`

**H2:** `Cleaning That Fits Your Space`

**Supporting copy:**

> "From routine home cleaning to detailed deep cleans and commercial spaces, choose a service designed around what you need."

### Services (in order)

1. **Residential Cleaning** — "Keep your home feeling fresh with dependable routine cleaning for everyday spaces."
2. **Deep Cleaning** — "Give your home a more thorough reset with detailed cleaning focused on the areas that need extra attention."
3. **Move-In / Move-Out Cleaning** — "Start fresh or leave your space ready for the next chapter with a detailed move-in or move-out clean."
4. **Airbnb & Short-Term Rental Cleaning** — "Keep your rental ready for the next guest with efficient turnover cleaning between stays."
5. **Commercial Cleaning** — "Maintain a clean, welcoming environment for your team, customers, and clients."

### Card Anatomy
Each service card includes:

- A subtle image / visual
- Service name
- Concise description (as above)
- `Learn More` CTA → links to the corresponding service page (`/services/residential-cleaning`, `/services/deep-cleaning`, `/services/move-in-move-out-cleaning`, `/services/airbnb-cleaning`, `/services/commercial-cleaning`)

### Layout

**Desktop:**
- Use a visually balanced grid.
- **Do not** force all five cards into a single awkward five-column row.
- A **3 + 2** arrangement (3 cards on top, 2 centered below) or other intentional editorial grid is preferred.

**Mobile:**
- Cards stack vertically.
- Consistent image proportions across all five cards.
- Subtle elevation or hairline-border treatment — **avoid** excessive shadows.

### Visual Treatment
- Border radius 12–16px.
- Subtle, restrained elevation.
- Whitespace generous inside each card.

### Accessibility
- Each card is a single anchor / link wrapping the whole card (with descriptive accessible name), or a card with a clear "Learn More" link.
- Image alt text describes the service context.
- Focus state visible on the entire card or its primary link.

---

## 8. Section 5 — Why PureNest

### Purpose
Communicate brand positioning in a more editorial, premium way — avoiding generic four-icon-card patterns.

### Visual Treatment
**Editorial split layout:** image on one side, content on the other. Alternating orientation across the page rhythm is encouraged to add visual variety.

### Approved Content (Phase 3)

**Eyebrow:** `WHY PURENEST`

**H2:** `A Simpler Way to Stay Clean`

**Supporting copy:**

> "Your time is valuable. PureNest is designed to make professional cleaning straightforward, flexible, and easy to arrange."

### Four Benefits

1. **Reliable Service** — "Cleaning support you can plan around your schedule."
2. **Attention to Detail** — "Thoughtful cleaning focused on the spaces that matter."
3. **Flexible Options** — "Services for routine cleaning, deep cleans, moves, rentals, and businesses."
4. **Local Focus** — "Serving customers throughout the Dallas area and surrounding communities."

> These are fictional concept positioning statements, not verified real-world claims.

### Visual Markers
- Use **restrained icons or typographic markers** if any are used at all.
- **Avoid** generic colorful icon sets.
- The section should communicate care and professionalism, not feature checklist energy.

### Accessibility
- H2 represents the section heading.
- Benefit list is semantic (`<ul>` / `<ol>`) with proper heading hierarchy if sub-headings are introduced.
- Icons (if used) are decorative; the text label carries the meaning.

---

## 9. Section 6 — How It Works

### Purpose
Make the engagement process feel simple and scannable in three steps.

### Approved Content (Phase 3)

**Eyebrow:** `HOW IT WORKS`

**H2:** `A Cleaner Space in Three Simple Steps`

**Steps:**

1. **Tell Us What You Need** — "Share a few details about your space and the cleaning service you're looking for."
2. **Get Your Quote** — "We'll review your request and help determine the right service for your needs."
3. **Enjoy a Fresher Space** — "Leave the cleaning to PureNest while you get back to the things that matter."

**Section CTA:** `Request a Free Quote`

### Visual Treatment
- Large numerical markers (`01`, `02`, `03`) styled in a restrained, premium way (e.g. display font or large numeric glyph).
- Each step is visually distinct yet consistent.
- The section is designed to be extremely easy to scan in one pass.

### Layout

- **Desktop:** Three-column row of steps, or three stacked editorial blocks.
- **Mobile:** Vertical stack.

### Accessibility
- Steps are presented as a semantic ordered list.
- Each step's number is decorative (text label carries the meaning).
- CTA button is keyboard-reachable with a visible focus state.

---

## 10. Section 7 — About PureNest (Homepage Teaser)

### Purpose
Provide a brief brand introduction and route visitors to the full About page.

### Visual Treatment
**Editorial split layout:** image on one side, content on the other (the opposite side orientation from "Why PureNest" to maintain rhythm).

### Approved Content (Phase 3)

**Eyebrow:** `ABOUT PURENEST`

**H2:** `Cleaning Made Simple`

**Copy:**

> "A clean space can make everyday life feel a little easier. PureNest was created around a simple idea: professional cleaning should be dependable, straightforward, and convenient."

> "Whether you need regular home cleaning, a deeper reset, help preparing for a move, rental turnover support, or commercial cleaning, our services are designed to fit different spaces and different needs."

**CTA:** `Learn More About Us` → links to `/about`

### Fictional-Project Safeguard
**Do not** state:

- A specific founding year
- Years of experience
- Number of employees
- Customer statistics
- Awards
- Certifications

This is a fictional portfolio project.

### Accessibility
- H2 represents the section heading.
- Image has descriptive alt text.
- CTA is a real link / button with a visible focus state.

---

## 11. Section 8 — Testimonials

### Purpose
Demonstrate how genuine customer testimonials could appear once a real business adopts this design.

### Fictional-Project Safeguard
Because PureNest is fictional:

- **Do not** create fake testimonials that appear to be genuine customer reviews.
- **Do not** create:
  - Fake Google reviews
  - Fake star ratings
  - Fake review counts
  - Fake customer photos
  - Fake business-platform badges (Yelp, Angi, Thumbtack, etc.)

The design must be structured so genuine testimonials could later be inserted by a real client. Until then, any testimonial content must be clearly identified as **sample / demo content**.

### Visual Treatment
- **Elegant editorial layout** rather than a large collection of generic cards.
- One or two featured testimonial blocks, presented with restraint.
- Use a quiet quotation treatment — typography-led rather than imagery-led.

### Content Guidance
- The H2 and supporting copy from Phase 3 apply:
  - Eyebrow: `Customer Experiences`
  - H2: `A Cleaner Experience, From Start to Finish`
- For the prototype, any sample quote should be visibly tagged as **"Sample testimonial — demo content"** or equivalent.

### Accessibility
- The component is keyboard navigable.
- Decorative quotation marks are `aria-hidden="true"`.
- Real (future) testimonials will be properly authored and accessible; the design must not lock the layout into a structure that prevents this.

---

## 12. Section 9 — Service Areas

### Purpose
Reinforce the local nature of the business and introduce the Dallas-area footprint.

### Approved Content (Phase 3)

**Eyebrow:** `SERVICE AREAS`

**H2:** `Proudly Serving the Dallas Area`

**Copy:**

> "PureNest is designed to serve homes, rentals, and businesses throughout Dallas and surrounding communities."

**Concept / demo locations:**

- Dallas
- Plano
- Frisco
- Irving
- Richardson
- Carrollton

> These are fictional project assumptions and must not be presented as verified real-world coverage.

**CTA:** `See Our Service Areas` → links to `/service-areas`

### Visual Treatment
- A clean local-service section.
- City list presented in a calm, typographic treatment.
- A **subtle geographic visual treatment** may be considered (e.g. a faint dotted-region motif or sage-toned map silhouette), but:
  - It must **not** be a fake interactive map.
  - It must **not** imply a real, verified service-area map.
  - It must be clearly decorative.

### Accessibility
- City list is a semantic list (`<ul>`).
- The CTA is a real link / button with a visible focus state.

---

## 13. Section 10 — FAQ

### Purpose
Answer the most common visitor questions concisely and accessibly.

### Approved Content (Phase 3)
The homepage must use the exact seven Q&As from Phase 3:

1. **What cleaning services does PureNest offer?** — PureNest offers residential cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and commercial cleaning.
2. **Do you offer recurring cleaning?** — Yes. Recurring cleaning can be requested as part of your service needs. Contact us with details about your space and preferred schedule.
3. **Do you offer deep cleaning?** — Yes. Our deep-cleaning service is designed for spaces that need more detailed attention than routine cleaning.
4. **Do you clean offices and commercial spaces?** — Yes. Commercial cleaning is available for offices and other small business environments.
5. **Do you offer move-in and move-out cleaning?** — Yes. Move-in and move-out cleaning is available for customers preparing a property for a new occupant or leaving a property behind.
6. **Which areas do you serve?** — The PureNest concept currently focuses on Dallas and surrounding communities including Plano, Frisco, Irving, Richardson, and Carrollton.
7. **How do I request a quote?** — Complete our online quote form with a few details about your space and the service you need. We'll use that information to understand your request.

> Do not rewrite the approved FAQ content unless necessary for formatting.

### Visual Treatment
- **Accessible accordion.**
- Clean, editorial — **not** heavily styled cards.
- Visible question hierarchy, clear expand/collapse control, sufficient touch target.
- Clear expanded vs. collapsed state.

### Behavior
- Each item expands to reveal the answer.
- Multiple items may be open at once (recommended) unless the design calls for single-open behavior.
- Smooth, restrained expansion animation (consistent with the motion direction in Phase 4A).

### Accessibility
- The accordion uses proper ARIA disclosure / accordion semantics (`aria-expanded`, `aria-controls`, etc.).
- Each question is a real `<button>`.
- Keyboard: Tab to focus, Enter/Space to toggle, Arrow keys (optional) for moving between items.
- Visible focus state on the question button.
- Color contrast verified for question text on background and any hover/focus surfaces.

---

## 14. Section 11 — Final CTA

### Purpose
Provide a strong, natural-feeling conversion moment as the page concludes.

### Approved Content (Phase 3)

**Eyebrow:** `READY FOR A CLEANER SPACE?`

**H2:**

> "Let's Make Cleaning One Less Thing to Worry About."

**Copy:**

> "Tell us what you need and take the first step toward a fresher, more comfortable space."

**Primary CTA:** `Get a Free Quote`

### Visual Treatment
- Use the **Deep Forest Green / Warm Off-White / White** palette.
- Consider a forest green panel on a warm off-white page background, or warm off-white text on a forest green panel.
- The Soft Sand accent may be used as a subtle highlight.
- The section should feel like a **natural conclusion** to the page, not an aggressive sales banner.

### Layout
- Centered or editorial split, depending on the rhythm established earlier on the page.
- Generous vertical padding to separate the CTA from surrounding sections.

### Accessibility
- Heading hierarchy preserved.
- Primary CTA is a real link / button to `/contact`.
- Visible focus state.

---

## 15. Section 12 — Footer

### Purpose
Provide persistent supporting navigation, brand description, contact placeholders, and legal links.

### Desktop Layout — Approximately Four Columns

| Column | Contents |
|---|---|
| **1. PureNest** | Brand name; short approved brand description. |
| **2. Quick Links** | Home · Services · About · Service Areas · Contact |
| **3. Services** | Residential Cleaning · Deep Cleaning · Move-In / Move-Out · Airbnb & Short-Term Rental · Commercial Cleaning |
| **4. Contact** | Fictional / demo contact placeholders only. |

### Additional Footer Elements
- Social links / icons
- Privacy Policy
- Terms
- Copyright

### Fictional-Project Safeguard
- Use **fictional / demo contact placeholders only**.
- Do **not** invent realistic personal contact information that could belong to an actual person.
- All contact details must be clearly labeled as demo / placeholder in the prototype.

### Mobile Layout
Columns collapse into stacked groups. The footer remains readable and accessible.

### Accessibility
- Semantic `<footer>` landmark.
- Navigation list with descriptive labels.
- Social icons have accessible names.
- Sufficient color contrast.

---

## 16. Homepage Visual Rhythm

The page should alternate between:

- Large image sections (Hero, Why PureNest, About)
- Clean text sections (Trust, How It Works, FAQ)
- Structured grids (Services Overview)
- Conversion-focused CTA sections (Final CTA)

Avoid making every section look identical. Specifically avoid the pattern:

> section → four cards → section → four cards → section → four cards

The homepage should feel **editorial and professionally art-directed** — confident whitespace, intentional contrast between dense and airy sections, and at least one or two quiet "breathing room" moments between content-heavy sections.

---

## 17. Required Reusable Components

The following components should emerge from this homepage specification. They are documented as **design contracts**, not implementation.

### 17.1 Header
- **Purpose:** Persistent brand, navigation, and primary CTA.
- **Visual structure:** Logo · nav links · prominent CTA.
- **Content hierarchy:** Brand → primary nav → conversion.
- **Desktop:** Horizontal layout, generous spacing.
- **Mobile:** Collapsed menu with prominent CTA inside.
- **Interaction:** Mobile menu open/close; optional sticky behavior.
- **Accessibility:** `<nav>` landmark, `aria-current`, focus states, keyboard navigation.

### 17.2 Mobile Navigation
- **Purpose:** Touch-friendly access to navigation on small screens.
- **Visual structure:** Full-width or near-full-width panel.
- **Content hierarchy:** Nav links first, CTA near the top of the menu.
- **Interaction:** Open/close animation; ESC to close; focus trap.
- **Accessibility:** Keyboard navigable; visible focus; clear close affordance.

### 17.3 Button
- **Purpose:** Primary and secondary actions.
- **Visual structure:** Primary = forest green / white text, moderate radius. Secondary = restrained, less visually heavy.
- **Content hierarchy:** Label only.
- **Interaction:** Subtle hover transition.
- **Accessibility:** Real `<button>` or link; visible focus; sufficient touch target.

### 17.4 Hero
- **Purpose:** Communicate what, where, why, action in a single viewport.
- **Visual structure:** Editorial two-column (desktop) / stacked (mobile).
- **Content hierarchy:** Eyebrow → heading → supporting copy → primary CTA → secondary CTA → reassurance.
- **Accessibility:** Single H1, meaningful image alt, keyboard-reachable CTAs.

### 17.5 Trust Signal
- **Purpose:** Communicate brand confidence without fabricating facts.
- **Visual structure:** Calm row / grid of typographic markers or restrained icons.
- **Content hierarchy:** Label + short description.
- **Accessibility:** Each marker has a meaningful label.

### 17.6 Section Heading
- **Purpose:** Consistent editorial heading pattern across the page.
- **Visual structure:** Optional eyebrow, H2, supporting copy.
- **Accessibility:** Proper heading levels (H2 within the page's H1).

### 17.7 Service Card
- **Purpose:** Summarize a service and link to its detail page.
- **Visual structure:** Image · service name · description · `Learn More` link.
- **Accessibility:** Whole card or its primary link is keyboard-reachable with descriptive accessible name.

### 17.8 Feature / Benefit Item
- **Purpose:** Communicate a single positioning benefit.
- **Visual structure:** Restrained icon (decorative) or typographic marker · label · description.
- **Accessibility:** Label carries the meaning; icon decorative.

### 17.9 Process Step
- **Purpose:** Communicate one step in the engagement flow.
- **Visual structure:** Large numeric marker · label · description.
- **Accessibility:** Ordered list semantics; number is decorative.

### 17.10 Testimonial
- **Purpose:** Present a customer voice.
- **Visual structure:** Restrained editorial block.
- **Accessibility:** Quotation markup (`<blockquote>`); clearly marked as sample/demo until real testimonials are available.

### 17.11 Service Area List
- **Purpose:** Communicate the local footprint.
- **Visual structure:** Calm typographic list of cities.
- **Accessibility:** Semantic list; not a fake interactive map.

### 17.12 FAQ Accordion
- **Purpose:** Answer common questions accessibly.
- **Visual structure:** Question button + collapsible answer panel.
- **Interaction:** Expand/collapse with proper disclosure semantics.
- **Accessibility:** ARIA disclosure pattern, keyboard support, visible focus.

### 17.13 CTA Banner
- **Purpose:** Drive a final conversion moment.
- **Visual structure:** Eyebrow + heading + copy + primary CTA on a brand panel.
- **Accessibility:** Heading hierarchy preserved; real CTA link / button.

### 17.14 Footer
- **Purpose:** Persistent supporting navigation, contact placeholders, legal links.
- **Visual structure:** Approximately four columns (desktop) / stacked (mobile).
- **Accessibility:** `<footer>` landmark, accessible social links, sufficient contrast.

---

## 18. Responsive Design

The following describes the **actual structural changes** by section, not a generic "responsive" claim.

### Header
- **Desktop:** Logo left, nav center/right, CTA far right.
- **Tablet:** Same as desktop, slightly tighter spacing.
- **Mobile:** Logo + menu button; menu expands to a stacked panel containing nav links and the prominent CTA.

### Hero
- **Desktop:** Two-column (text left, image right).
- **Tablet:** Two-column with reduced proportions; image may shrink.
- **Mobile:** Single column — eyebrow → heading → supporting copy → CTAs → reassurance → image.

### Services Overview
- **Desktop:** 3 + 2 grid (3 cards top, 2 centered below) or balanced editorial grid.
- **Tablet:** 2 + 2 + 1 or 2-column balanced.
- **Mobile:** Single-column stack.

### Why PureNest
- **Desktop:** Editorial split (image + content).
- **Tablet:** Same split, with reduced image width.
- **Mobile:** Stacked — image on top, content below (or content on top, image below, depending on rhythm).

### How It Works
- **Desktop:** Three steps in a row, or three stacked editorial blocks.
- **Tablet:** Three steps in a row, with adjusted spacing.
- **Mobile:** Vertical stack.

### About PureNest
- **Desktop:** Editorial split (image + content). Orientation opposite to Why PureNest to maintain rhythm.
- **Tablet:** Same split, with reduced image width.
- **Mobile:** Stacked.

### Testimonials
- **Desktop:** Editorial single-featured or two-up restrained layout.
- **Tablet:** Stacked or two-up depending on density.
- **Mobile:** Stacked.

### Service Areas
- **Desktop:** City list presented as a calm row or grid.
- **Tablet:** Wraps gracefully.
- **Mobile:** Stacked list.

### FAQ
- **Desktop:** Centered or constrained-width column for readability.
- **Tablet:** Same.
- **Mobile:** Full-width with comfortable padding.

### Final CTA
- **Desktop:** Generous padding panel; centered or split editorial.
- **Tablet:** Same with reduced padding.
- **Mobile:** Centered stack with full-width CTA.

### Footer
- **Desktop:** Four columns.
- **Tablet:** Two-column groups.
- **Mobile:** Stacked single-column groups.

---

## 19. Spacing System

The homepage follows a **consistent spacing philosophy** based on Phase 4A's "generous whitespace" principle.

Recommended scales (subject to implementation refinement):

- **Section spacing (vertical between major sections):** Generous — the page should breathe. Sections should not stack tightly.
- **Container padding (horizontal):** Responsive, increasing with breakpoint. Comfortable on mobile, more spacious on desktop.
- **Card spacing (internal padding):** Generous inside each card so image, title, description, and link all sit comfortably.
- **Heading-to-paragraph spacing:** Small-to-medium; headings should feel connected to their supporting copy, not detached.
- **Paragraph-to-button spacing:** Medium; the CTA should feel like the natural next step.
- **Grid gaps:** Medium — visible breathing between cards, but not so wide that the grid feels disconnected.

> Exact pixel values are implementation refinements. The principle is **generous, consistent, calm whitespace** — never cramped, never wasteful.

---

## 20. Image System

Recommended image aspect ratios and treatment for the homepage:

| Location        | Aspect Ratio / Treatment        |
|-----------------|---------------------------------|
| **Hero**        | Wide, premium interior — landscape, comfortable aspect for editorial two-column. Rounded corners 12–16px. |
| **Service cards** | Consistent proportions across all five cards. Rounded corners 12–16px. |
| **About section** | Editorial split image — landscape or square depending on layout. Rounded corners 12–16px. |
| **Why PureNest** | Editorial split image — landscape. Rounded corners 12–16px. |
| **Testimonials** | Restrained; imagery optional. If used, small and subtle. |

**General image treatment:**

- Natural lighting
- Warm tones
- Clean interiors
- Realistic environments
- Restrained border radius (12–16px)
- Consistent visual cropping so the page feels art-directed

**Avoid:**

- Cleaning workers posing at camera
- Spray bottles prominently displayed
- Unrealistic luxury homes
- Overly staged stock photos
- Cartoon illustrations
- Artificial-looking people

All imagery must be **properly licensed or generated** — never copy from real cleaning companies' assets.

---

## 21. Accessibility Requirements (Homepage-Level)

- **Semantic heading hierarchy:** One H1 (Hero). Each major section uses an H2. Any subsections use H3.
- **Keyboard navigation:** All interactive elements (links, buttons, accordion triggers, mobile menu) are keyboard reachable and operable.
- **Focus states:** Visible focus state on all interactive elements — primary forest green or another clearly contrasting treatment against the background.
- **Color contrast:** WCAG-conscious. Verify charcoal on warm off-white, white on forest green, and muted text usage.
- **Accessible navigation:** `<header>` and `<nav>` landmarks; current page indicated via `aria-current`.
- **Accessible FAQ:** ARIA disclosure / accordion semantics; keyboard support.
- **Accessible buttons and links:** Real semantic elements; descriptive link text (avoid "click here" or "read more" alone).
- **Alt text strategy:**
  - Hero image: meaningful description of the interior / cleaning scene.
  - Service card images: describe the service context (e.g. "Bright, organized kitchen ready for daily use").
  - About / Why PureNest images: meaningful description of the scene.
  - Decorative images/icons: `alt=""` and `aria-hidden="true"`.
- **Reduced motion:** Animation honors `prefers-reduced-motion`. Accordion, fade-in, and hover transitions either disable or shorten significantly when reduced motion is preferred.
- **Touch targets:** ≥ ~44px tap targets on all interactive elements.

---

## 22. Conversion Strategy

The primary CTA (`Get a Free Quote`) should appear in a **calibrated, non-aggressive** set of locations:

- Header (persistent)
- Hero (primary action)
- Relevant content sections (e.g. after services, after final CTA)
- Final CTA section
- Mobile navigation (when expanded)

**Do not** overuse the CTA in every paragraph. The conversion path should feel natural:

```
Hero
  → Services
  → Trust
  → Value (Why PureNest)
  → Process (How It Works)
  → About
  → Service Areas
  → FAQ
  → Quote
```

The secondary CTA (`Explore Our Services`) is reserved for the Hero and a small number of supporting moments — it is never as visually prominent as the primary CTA.

---

## 23. Fictional-Project Safeguards (Homepage-Specific)

The homepage must **never** present fictional information as real.

**Do not invent or display:**

- Customer statistics
- Testimonials presented as genuine
- Google ratings
- Awards
- Certifications
- Years of experience
- Employee counts
- Revenue
- Guarantees
- Real addresses
- Real phone numbers
- Real email addresses

The design must be realistic enough to demonstrate the quality of a finished client website while remaining transparent about fictional/demo content.

---

## 24. Stitch Homepage Design Brief

This section translates the entire homepage specification into a concise visual-design brief suitable for downstream tooling (e.g. Stitch). It does not generate any output file in this phase — it is a written brief only.

### Brand
- **Name:** PureNest Cleaning Co.
- **Type:** Fictional portfolio project (local cleaning business concept).
- **Tone:** Modern hospitality + professional local service.

### Target Customer
- **Primary:** Homeowners.
- **Secondary:** Busy professionals, Airbnb / short-term rental hosts, property managers, small businesses.
- **Geography:** Dallas, Texas, USA and surrounding communities (concept / demo).

### Visual Style
- Modern
- Premium
- Warm
- Natural
- Trustworthy
- Local
- Minimal
- Editorial, professionally art-directed

### Color Palette
- **Primary:** Deep Forest Green `#173F35`
- **Secondary:** Sage `#8FAF9F`
- **Background:** Warm Off-White `#F7F6F1`
- **Surface:** White `#FFFFFF`
- **Accent:** Soft Sand `#DCC9A3`
- **Primary Text:** Charcoal `#26322E`
- **Muted Text:** `#66736D`

### Typography
- **Body / interface:** DM Sans
- **Display (selective):** Playfair Display
- **Hierarchy (desktop, approx.):** H1 56–72px · H2 40–48px · H3 24–32px · Body 16–18px · Small 13–14px

### Page Structure (in order)
1. Header
2. Hero
3. Trust / Credibility
4. Services Overview (5 services)
5. Why PureNest
6. How It Works (3 steps)
7. About PureNest (teaser)
8. Testimonials (sample/demo)
9. Service Areas (6 demo cities)
10. FAQ (7 Q&As, accessible accordion)
11. Final CTA
12. Footer

### Layout
- Desktop container: 1200–1280px max width.
- Generous whitespace throughout.
- Editorial split layouts for Why PureNest and About.
- 3 + 2 service grid on desktop.
- Mobile-first vertical stacking with comfortable touch targets.

### Imagery
- Natural, warm, bright, lived-in-but-organized interiors.
- Preferred subjects: clean kitchens, bright bathrooms, tidy living rooms, professional cleaning details, tasteful commercial interiors.
- Avoid posed workers, spray bottles, mansions, stock-photo clichés, cartoon illustrations, artificial-looking people.
- Restrained border radius (12–16px).
- Properly licensed or generated.

### Components
Header · Mobile Navigation · Button (primary + secondary) · Hero · Trust Signal · Section Heading · Service Card · Feature/Benefit Item · Process Step · Testimonial · Service Area List · FAQ Accordion · CTA Banner · Footer.

### Responsive Requirements
- **Desktop:** Editorial two-column hero, 3 + 2 service grid, four-column footer.
- **Tablet:** Adjusted proportions, intelligent collapse.
- **Mobile:** Single-column stacking, collapsed menu with prominent CTA, stacked footer.

### Accessibility Requirements
- One H1, semantic H2/H3 hierarchy.
- WCAG-conscious color contrast.
- Visible focus states.
- Real buttons and links; descriptive labels.
- Accessible accordion with disclosure semantics.
- Keyboard navigation across all interactive elements.
- `prefers-reduced-motion` honored.
- ≥ ~44px touch targets.
- Meaningful alt text for images; decorative imagery marked accordingly.

### Things to Avoid
- Generic AI-looking cleaning templates.
- Fake statistics, fake reviews, fake ratings.
- "As seen in" logo strips.
- Cartoon illustrations or sparkles.
- Cluttered layouts and excessive shadows.
- Cheap-looking gradients.
- Overly rounded SaaS-style cards.
- Excessive animation / parallax.
- Real businesses' branding, assets, or contact details.

### Tone of Voice
Professional · Warm · Clear · Confident · Helpful · Local · Customer-focused. Avoid corporate jargon, excessive exclamation marks, aggressive sales language, unrealistic promises, and unverified "number-one" claims.

### Output Reminder
This is a **written design brief only** for the homepage. It does not generate any UI output, code, or framework files. Downstream phases (e.g. Phase 4B.2 onward) will use briefs like this to specify other pages.

---

## 25. Alignment Verification

This specification is consistent with:

- **Phase 1 — Project Brief:** Business concept, brand personality, target customers, services, CTA priorities, fictional / disclaimer safeguards, and V1 scope are unchanged.
- **Phase 2 — Sitemap & Information Architecture:** The homepage's 12-section order, navigation order, internal linking (Services → individual service pages → Contact; About → Contact; Service Areas → Contact), and conversion architecture match exactly.
- **Phase 3 — Content Strategy:** All eyebrows, H1/H2 text, supporting copy, FAQ Q&As, service descriptions, About teaser copy, Service Areas copy, and Final CTA copy are reproduced verbatim. CTA terminology (`Get a Free Quote`, `Explore Our Services`, `Learn More`, `Learn More About Us`, `See Our Service Areas`, `Request a Free Quote`) matches exactly.
- **Phase 4A — Design Direction & Design System:** All color tokens, fonts, hierarchy, container width, radius scale, button styling, photography direction, animation rules, and accessibility considerations are reused as specified.

The approved sitemap, business strategy, copy, and design system are **not altered**.

---

## Phase 4B.1 Checklist

- [x] Project context (brand, objective, CTAs, visual direction) confirmed
- [x] Approved design system referenced
- [x] 12-section homepage structure order confirmed
- [x] Section 1 — Header specified (desktop + mobile, sticky recommendation, accessibility)
- [x] Section 2 — Hero specified (content, layout, image, mobile stack, accessibility)
- [x] Section 3 — Trust / Credibility specified (with fictional-content safeguards)
- [x] Section 4 — Services Overview specified (5 services, 3+2 grid, card anatomy, accessibility)
- [x] Section 5 — Why PureNest specified (editorial split, 4 benefits, restrained icons)
- [x] Section 6 — How It Works specified (3 steps, large numeric markers, CTA)
- [x] Section 7 — About PureNest specified (editorial split, content, no-fake-history safeguard)
- [x] Section 8 — Testimonials specified (editorial layout, sample/demo tagging)
- [x] Section 9 — Service Areas specified (6 demo cities, no-fake-map safeguard)
- [x] Section 10 — FAQ specified (accessible accordion, 7 Q&As verbatim)
- [x] Section 11 — Final CTA specified (eyebrow, heading, copy, CTA, palette)
- [x] Section 12 — Footer specified (4 columns, demo contact placeholders)
- [x] Homepage visual rhythm guidance captured
- [x] 14 reusable components documented (purpose, structure, hierarchy, responsive, accessibility)
- [x] Responsive design documented per section (desktop / tablet / mobile)
- [x] Spacing system philosophy documented
- [x] Image system (aspect ratios + treatment) documented
- [x] Accessibility requirements captured
- [x] Conversion strategy captured (where + why the primary CTA appears)
- [x] Fictional-project safeguards captured
- [x] Stitch Homepage Design Brief included as a written brief only
- [x] Alignment with Phase 1, 2, 3, and 4A verified
- [x] No implementation code included
- [x] No CSS, Tailwind, JS/TS, or framework files included
- [x] No application or deployment artifacts created

---

## Next Phase

**Phase 4B.2 — Remaining Page-Level UI Specifications**

(This document will be created in a separate phase. Do not begin until the current phase is reviewed and approved.)
