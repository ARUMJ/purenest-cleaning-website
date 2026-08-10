/**
 * PureNest Cleaning Co. — Inner Page Content
 *
 * Source of truth for the inner pages built in Phase 5.2:
 * Services hub, About, Service Areas, Contact, and the 404 page.
 *
 * All copy comes from the approved Phase 2 sitemap/architecture and
 * Phase 3 content strategy documents. Nothing here introduces new
 * factual claims, statistics, certifications, or guarantees.
 */

import { aboutSection, footer, howItWorks } from './homepage';

export const servicesHub = {
  eyebrow: 'Our Services',
  pageTitle: 'Cleaning Services for Homes, Rentals & Businesses',
  intro:
    'From routine cleaning to detailed deep cleans, PureNest offers flexible services designed for different spaces and different needs.',
  cta: { label: 'Get a Free Quote', href: '/contact' },
} as const;

export const aboutPage = {
  eyebrow: 'About PureNest',
  pageTitle: 'A Cleaner Space. A Simpler Experience.',
  intro:
    'PureNest is built around a straightforward idea: getting professional cleaning should be easy.',
  storyHeading: 'Our Story',
  /** Approved Phase 3 homepage About paragraphs, reused verbatim. */
  storyParagraphs: aboutSection.paragraphs,
  approachHeading: 'Our Approach',
  approachLead:
    'Clear communication, practical services, and attention to the details that help a space feel fresh and comfortable.',
  /** Three visual restatements of the approved approach sentence. */
  approachPoints: [
    {
      title: 'Clear Communication',
      description: 'Straightforward conversations about what your space needs.',
    },
    {
      title: 'Practical Services',
      description: 'Services designed around real spaces and real routines.',
    },
    {
      title: 'Attention to Detail',
      description: 'Focus on the details that help a space feel fresh and comfortable.',
    },
  ],
  valuesHeading: 'Our Values',
  values: [
    { title: 'Reliability', description: 'Do what you say you’ll do.' },
    { title: 'Care', description: 'Treat every space with attention and respect.' },
    { title: 'Simplicity', description: 'Make the process easy for customers.' },
    { title: 'Consistency', description: 'Build an experience customers can understand and plan around.' },
  ],
} as const;

export const serviceAreasPage = {
  eyebrow: 'Service Areas',
  pageTitle: 'Cleaning Services Across the Dallas Area',
  intro:
    'PureNest is designed to serve homes, rentals, and businesses throughout Dallas and nearby communities.',
  citiesHeading: 'Cities & Communities',
  /** Approved six demo locations with neutral concept descriptors. */
  cities: [
    { name: 'Dallas', note: 'The anchor of the PureNest concept service area.' },
    { name: 'Plano', note: 'A concept service area north of Dallas.' },
    { name: 'Frisco', note: 'A concept service area north of Dallas.' },
    { name: 'Irving', note: 'A concept service area between Dallas and Fort Worth.' },
    { name: 'Richardson', note: 'A concept service area north of Dallas.' },
    { name: 'Carrollton', note: 'A concept service area north of Dallas.' },
  ],
  localHeading: 'Local Service',
  localNote:
    'PureNest is designed to provide reliable residential and commercial cleaning for homes, rentals, and businesses throughout the Dallas area.',
  demoNote:
    'Concept / demo coverage for a fictional portfolio project — not verified real-world coverage.',
  cta: { label: 'Get a Free Quote', href: '/contact' },
} as const;

export const contactPage = {
  eyebrow: 'Contact',
  pageTitle: 'Request Your Free Quote',
  intro:
    'Tell us a little about your space and what you need. We’ll use your information to understand your cleaning request.',
  reassurance: 'No obligation. Just tell us what you need.',
  stepsHeading: 'What Happens Next',
  /** Approved Phase 3 How It Works steps, reused as the follow-up flow. */
  steps: howItWorks.steps,
  contactHeading: 'Demo Contact Details',
  contact: footer.contact,
  demoNote:
    'This quote form is a demonstration flow for a fictional portfolio project. No email or CRM is connected — real integration will be added later.',
} as const;

export const notFoundPage = {
  code: '404',
  title: 'Page Not Found',
  copy:
    'The page you’re looking for doesn’t exist or may have moved. Try the navigation below or request a free quote.',
  ctaHome: { label: 'Back to Home', href: '/' },
  ctaServices: { label: 'Explore Our Services', href: '/services' },
} as const;
