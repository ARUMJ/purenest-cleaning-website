# PureNest Cleaning Co. — Phase 4A: UI/UX Design Direction & Design System

> **Status:** Phase 4A — UI/UX Design Direction & Design System
> **Phase:** Design (Direction + Tokens)
> **Last Updated:** 2026-08-09
> **Project Type:** Fictional portfolio / concept website
> **Disclaimer:** This is a fictional project. It must never be presented as a real client or as a real business.

This document defines the approved **UI/UX design direction and design system** for PureNest Cleaning Co. It builds on the Phase 1 Project Brief, the Phase 2 Sitemap & Information Architecture, and the Phase 3 Content Strategy. It establishes the visual language, color tokens, typography, layout, component styling, accessibility, and motion direction. It is the source of truth for all visual decisions in the build phase.

> This document covers design direction and tokens only. It does **not** include component implementation, page builds, or front-end code. Those will be addressed in later phases.

---

## 1. Overall Visual Direction

The visual style should communicate:

- Clean
- Premium
- Warm
- Trustworthy
- Modern
- Local

The website should feel like a **premium modern home-service brand** rather than a generic cleaning-company template.

**Avoid:**

- Excessive bright blue
- Generic stock images of people holding spray bottles
- Cartoon cleaning illustrations
- Excessive bubbles / sparkles
- Cluttered layouts
- Cheap-looking gradients
- Overly rounded SaaS-style cards
- Excessive animation

**Desired feeling:**

> Modern hospitality + professional local service.

---

## 2. Design Personality

| Trait         | Level      |
|---------------|------------|
| Professional  | High       |
| Premium       | Medium-high|
| Friendly      | High       |
| Minimal       | High       |
| Playful       | Low        |
| Corporate     | Low        |
| Luxury        | Medium     |
| Local         | High       |
| Technical     | Very low   |

This personality profile guides tone, restraint, and detail decisions across the entire interface.

---

## 3. Color System

The brand palette is warm, natural, and restrained.

| Role             | Name              | Hex       |
|------------------|-------------------|-----------|
| **Primary**      | Deep Forest Green | `#173F35` |
| **Secondary**    | Sage              | `#8FAF9F` |
| **Background**   | Warm Off-White    | `#F7F6F1` |
| **Surface**      | Pure White        | `#FFFFFF` |
| **Accent**       | Soft Sand         | `#DCC9A3` |
| **Primary Text** | Charcoal          | `#26322E` |
| **Muted Text**   | Muted             | `#66736D` |

**Usage guidance:**

- Use colors intentionally. The dominant relationship should be **warm off-white, white, deep forest green, restrained sage, and occasional soft sand**.
- The forest green carries the primary actions and brand identity.
- Sage and soft sand are accent / supporting tones — used sparingly.
- Muted text is for secondary copy, captions, and metadata — never for primary content.

---

## 4. Typography

**Primary body / interface font:**
`DM Sans`

**Display font:**
`Playfair Display`

> Playfair Display should be used **selectively for major editorial-style headings**, not throughout the interface. Routine UI text and most headings should use DM Sans.

**Approximate hierarchy (desktop):**

| Token | Size     |
|-------|----------|
| H1    | 56–72px  |
| H2    | 40–48px  |
| H3    | 24–32px  |
| Body  | 16–18px  |
| Small | 13–14px  |

> Exact responsive values may be refined during implementation. The ranges above establish the visual scale and rhythm.

---

## 5. Layout

- Use **generous whitespace** throughout.
- Desktop maximum content width: **approximately 1200–1280px**.
- Use **responsive horizontal padding**.
- Avoid excessively wide text blocks (constrain measure for readability).

---

## 6. Border Radius

| Element      | Radius  |
|--------------|---------|
| Buttons      | 8–10px  |
| Cards        | 12–16px |
| Form fields  | 8–10px  |
| Images       | 12–16px |

Avoid excessive pill-shaped UI. Keep radii modest and consistent.

---

## 7. Buttons

**Primary button:**

- Deep Forest Green (`#173F35`) background
- White text
- Comfortable padding
- Moderate radius (8–10px)
- Subtle hover transition

**Primary CTA:**
`Get a Free Quote`

**Secondary CTA:**
`Explore Our Services`

> The primary CTA must be **visually stronger** than secondary actions throughout the site.

---

## 8. Header

**Desktop header order:**

- Logo
- Home
- Services
- About
- Service Areas
- Contact
- **Get a Free Quote** *(prominent CTA button)*

The header should be clean, spacious, and **optionally sticky / persistent**.

**Mobile navigation** should collapse into a menu, with the quote CTA still visually prominent.

---

## 9. Hero

The hero must immediately communicate:

- **What** PureNest does
- **Where** it operates
- **Why** it matters
- **What action** the visitor should take

**Primary CTA:** `Get a Free Quote`
**Secondary CTA:** `Explore Our Services`

Use a **strong, naturally lit interior image**.

> Avoid obvious generic stock compositions. Photography should feel realistic, warm, and lived-in.

---

## 10. Photography Direction

Images should feel:

- Natural
- Bright
- Warm
- Realistic
- Premium
- Residential
- Clean
- Lived-in but organized

**Preferred subjects:**

- Clean kitchens
- Bright bathrooms
- Tidy living rooms
- Professional cleaning details
- Tasteful commercial interiors
- Subtle cleaning-in-progress photography

**Avoid:**

- People smiling directly at camera while holding cleaning products
- Unrealistic mansions
- Overly staged stock photos
- Cartoon illustrations
- Artificial-looking people

All imagery must be **properly licensed or generated** — never copy from real cleaning companies' assets.

---

## 11. Service Cards

Five service cards, in this order:

1. Residential Cleaning
2. Deep Cleaning
3. Move-In / Move-Out Cleaning
4. Airbnb & Short-Term Rental Cleaning
5. Commercial Cleaning

Each card should remain **visually simple** and contain:

- A subtle image / visual
- Service name
- Short description
- `Learn More` link

> Do not overload cards with excessive information. The service detail pages (Phase 2) carry the depth.

---

## 12. Why PureNest

Prefer an **editorial split layout** rather than four generic cards.

**Possible structure:**

- Content block + supporting image

**Benefits (from Phase 3):**

- Reliable Service
- Attention to Detail
- Flexible Options
- Local Focus

---

## 13. How It Works

Use **three visually distinct steps**:

```
01 — Tell Us What You Need
02 — Get Your Quote
03 — Enjoy a Fresher Space
```

Keep the section easy to scan. Include a `Request a Free Quote` CTA.

---

## 14. About Section

Use an **editorial split layout**: image + content.

**Content includes:**

- Eyebrow: `About PureNest`
- H2: `Cleaning Made Simple`
- Short supporting copy (from Phase 3)
- `Learn More About Us` CTA

---

## 15. Testimonials

Use a **restrained testimonial component**.

> Because PureNest is a fictional portfolio project, testimonial content must be clearly treated as **sample / demo content**.
>
> Do not create fake Google reviews, fake ratings, fake review counts, or claims that appear genuine.

---

## 16. Service Areas

Create a **clean local-service section** showing the six concept / demo locations:

- Dallas
- Plano
- Frisco
- Irving
- Richardson
- Carrollton

**Section CTA:** `See Our Service Areas`

> Do not create a fake interactive map at this stage.

---

## 17. FAQ

Use an **accessible accordion**.

- Questions should be visually clear.
- Accordion must support:
  - Keyboard navigation
  - Visible focus state
  - Clear expanded / collapsed state

The seven homepage FAQ Q&As from Phase 3 apply.

---

## 18. Final CTA

A **visually distinct** final CTA section.

**Eyebrow:**
`Ready for a Cleaner Space?`

**Heading:**

> "Let's Make Cleaning One Less Thing to Worry About."

**CTA:**
`Get a Free Quote`

Keep the section visually consistent with the brand palette (forest green on warm off-white, or with the soft sand accent).

---

## 19. Footer

Desktop footer should use approximately **four columns**:

1. **PureNest** — brand description
2. **Quick Links** — navigation
3. **Services** — service links
4. **Contact** — contact placeholders

The footer also includes:

- Social links / icons
- Privacy Policy
- Terms
- Copyright

> All contact information must remain **clearly fictional / demo placeholders**.

---

## 20. Forms

The quote form (per Phase 2 / Phase 3) must use:

- Visible labels
- Clear placeholders (as hints only, not as labels)
- Adequate spacing between fields
- Strong, visible focus states
- Accessible validation
- Accessible error messages

> Do not rely only on placeholder text for labels.

---

## 21. Responsive Design

Design **mobile-first**.

| Breakpoint | Approach |
|---|---|
| **Mobile**  | Prioritize vertical stacking and touch-friendly controls. Navigation becomes a mobile menu. |
| **Tablet**  | Collapse layouts intelligently. |
| **Desktop** | Use two-column layouts where appropriate. |

The Phase 1 success criteria (clear within 5–10 seconds) must hold across all breakpoints.

---

## 22. Accessibility

The design must consider:

- WCAG-conscious color contrast (verify charcoal-on-warm-off-white and white-on-forest-green pairings)
- Keyboard navigation across all interactive elements
- Visible focus states on links, buttons, and form fields
- Semantic heading hierarchy (H1 → H2 → H3)
- Accessible forms (labels, error messages, required-field indicators)
- Descriptive links (avoid "click here")
- Meaningful image alt text
- Reduced-motion considerations
- Touch-friendly controls (≥ ~44px tap targets)

---

## 23. Animation

Animation should be **subtle and purposeful**.

**Appropriate:**

- Fade-in
- Slight upward reveal
- Button hover transitions
- Image transitions
- Accordion expansion

**Avoid:**

- Excessive parallax
- Spinning elements
- Constant floating animations
- Long loading animations
- Animation on every element

> Overall feeling should remain **calm and premium**, in line with the brand personality.

---

## 24. Design System Summary

| Token | Value |
|---|---|
| **Brand** | PureNest Cleaning Co. |
| **Style** | Modern / Premium / Warm / Natural |
| **Primary** | `#173F35` (Deep Forest Green) |
| **Secondary** | `#8FAF9F` (Sage) |
| **Background** | `#F7F6F1` (Warm Off-White) |
| **Surface** | `#FFFFFF` (Pure White) |
| **Accent** | `#DCC9A3` (Soft Sand) |
| **Text** | `#26322E` (Charcoal) |
| **Muted** | `#66736D` (Muted) |
| **Body font** | DM Sans |
| **Display font** | Playfair Display |
| **Container** | 1200–1280px |
| **Radius** | 8–16px |
| **Primary CTA** | Get a Free Quote |

---

## 25. Important Project Constraints

PureNest is a **fictional portfolio project**.

Do **not** invent:

- Real customer statistics
- Real testimonials
- Real ratings
- Awards
- Certifications
- Years of experience
- Business results
- Real contact information

The visual design should demonstrate what a professional real cleaning-business website could look like **without misrepresenting fictional information as real**.

---

## 26. Alignment With Prior Phases

This document is consistent with:

- **Phase 1 — Project Brief:** warm / clean / trustworthy / local brand personality; deep blue/navy + green/teal visual direction adjusted to **deep forest green + sage** for a more premium, hospitality-leaning palette while preserving trust + local signals. V1 scope unchanged.
- **Phase 2 — Sitemap & Information Architecture:** all 10 page structures, primary / secondary CTAs, navigation order, internal linking, and form fields are unchanged. This document styles the same content — it does not alter it.
- **Phase 3 — Content Strategy:** all H1 / H2 / eyebrow text, FAQ Q&As, form copy, and final CTA copy match exactly. The brand's primary and supporting positioning lines remain untouched.

The approved sitemap, business strategy, and copy are **not altered**.

---

## Phase 4A Checklist

- [x] Overall visual direction defined
- [x] Design personality profile set
- [x] Color system locked (7 tokens)
- [x] Typography locked (DM Sans + Playfair Display with hierarchy)
- [x] Layout rules defined (container, whitespace, text measure)
- [x] Border-radius scale defined
- [x] Button system (primary + secondary) defined
- [x] Header structure defined (desktop + mobile)
- [x] Hero direction defined (CTAs, image, messaging)
- [x] Photography direction defined (preferred + avoid)
- [x] Service cards direction defined
- [x] Why PureNest layout direction defined
- [x] How It Works direction defined
- [x] About section layout direction defined
- [x] Testimonials direction defined (with fictional safeguard)
- [x] Service Areas direction defined (6 demo cities, no fake map)
- [x] FAQ direction defined (accessible accordion)
- [x] Final CTA direction defined
- [x] Footer structure defined (4 columns + extras)
- [x] Form styling direction defined (labels, focus, errors)
- [x] Responsive design direction defined (mobile-first)
- [x] Accessibility requirements listed
- [x] Animation direction defined (subtle, calm, premium)
- [x] Design System Summary table captured
- [x] Fictional-project safeguards preserved
- [x] Alignment with Phase 1, 2, and 3 verified

---

## Next Phase

**Phase 4B — Page-Level Design & Component Specifications**

(This document will be created in a separate phase. Do not begin until the current phase is reviewed and approved.)
