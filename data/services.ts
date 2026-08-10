/**
 * PureNest Cleaning Co. — Service Page Content
 *
 * Source of truth for the five individual service pages. Base fields
 * (name, description, image) are imported from the approved homepage
 * data (`data/homepage.ts`) so copy is never duplicated. Page-level
 * copy comes from the approved Phase 3 content strategy (sections
 * 14–18) and the Phase 2 service-page architecture (section 15).
 *
 * `whoItsFor` paragraphs are short editorial restatements of the
 * approved Phase 3 intros / descriptions — they introduce no new
 * factual claims, statistics, certifications, or guarantees.
 */

import { faq as homepageFaq, services } from './homepage';

export type FaqItem = { question: string; answer: string };

export type ServicePageContent = {
  slug: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
  /** Approved Phase 3 H1 for this service page. */
  pageTitle: string;
  /** Approved Phase 3 intro copy. */
  intro: string;
  includedHeading: string;
  /** Approved Phase 3 "potential focus areas". */
  includedItems: string[];
  whoHeading: string;
  whoItsFor: string;
  /** Approved Phase 3 per-service CTA label. */
  ctaLabel: string;
  faqHeading: string;
  /** Curated from the seven approved homepage FAQ Q&As. */
  faq: FaqItem[];
};

type ServiceSlug = (typeof services)[number]['slug'];

type ServiceContent = {
  pageTitle: string;
  intro: string;
  includedItems: readonly string[];
  whoItsFor: string;
  ctaLabel: string;
  faqQuestions: readonly string[];
};

/**
 * The seven approved homepage Q&As, keyed by question text so inner
 * pages can curate only the relevant ones without inventing copy.
 */
const faqByQuestion = new Map<string, FaqItem>(
  homepageFaq.items.map((item) => [item.question, item]),
);

/** Returns the approved FAQ items matching the given question texts. */
export function curatedFaq(questions: readonly string[]): FaqItem[] {
  return questions.map((question) => {
    const item = faqByQuestion.get(question);
    if (!item) {
      throw new Error(`Unknown FAQ question referenced in service data: "${question}"`);
    }
    return item;
  });
}

const contentBySlug = {
  'residential-cleaning': {
    pageTitle: 'Residential Cleaning That Fits Your Routine',
    intro:
      'Keep your home feeling fresh and comfortable with professional cleaning designed around your everyday needs.',
    includedItems: [
      'Living areas',
      'Bedrooms',
      'Kitchens',
      'Bathrooms',
      'Floors',
      'General surface cleaning',
    ],
    whoItsFor:
      'Designed for homeowners and renters who want dependable routine cleaning for their everyday living spaces.',
    ctaLabel: 'Get a Free Quote',
    faqQuestions: [
      'Do you offer recurring cleaning?',
      'Which areas do you serve?',
      'How do I request a quote?',
    ],
  },
  'deep-cleaning': {
    pageTitle: 'A Deeper Clean for a Fresh Start',
    intro:
      'When your space needs more than routine cleaning, a detailed deep clean can help give it the reset it needs.',
    includedItems: [
      'Kitchens',
      'Bathrooms',
      'Surfaces',
      'Floors',
      'Hard-to-reach areas',
      'High-use spaces',
    ],
    whoItsFor:
      'A good fit for homes and spaces that need more detailed attention than a routine clean provides.',
    ctaLabel: 'Request a Deep Cleaning Quote',
    faqQuestions: [
      'Do you offer deep cleaning?',
      'Which areas do you serve?',
      'How do I request a quote?',
    ],
  },
  'move-in-move-out-cleaning': {
    pageTitle: 'Leave Clean. Move In Fresh.',
    intro:
      'Moving is already a lot of work. Professional move-in or move-out cleaning can help make the transition easier.',
    includedItems: [
      'Kitchens',
      'Bathrooms',
      'Floors',
      'Empty rooms',
      'Surfaces',
      'General property cleaning',
    ],
    whoItsFor:
      'For tenants, owners, and landlords preparing a property for a new occupant — or leaving a space clean for the next chapter.',
    ctaLabel: 'Get a Move Cleaning Quote',
    faqQuestions: [
      'Do you offer move-in and move-out cleaning?',
      'Which areas do you serve?',
      'How do I request a quote?',
    ],
  },
  'airbnb-cleaning': {
    pageTitle: 'Keep Your Rental Ready for the Next Guest',
    intro:
      'Efficient turnover cleaning designed to help short-term rental hosts prepare their spaces between stays.',
    includedItems: [
      'Guest areas',
      'Bathrooms',
      'Kitchen',
      'Floors',
      'Surfaces',
      'General reset',
    ],
    whoItsFor:
      'For hosts of short-term rentals who want their spaces consistently clean and ready for arriving guests.',
    ctaLabel: 'Get a Rental Cleaning Quote',
    faqQuestions: [
      'What cleaning services does PureNest offer?',
      'Which areas do you serve?',
      'How do I request a quote?',
    ],
  },
  'commercial-cleaning': {
    pageTitle: 'A Cleaner Workplace Starts Here',
    intro:
      'Maintain a clean, welcoming environment for your team, customers, and clients with professional commercial cleaning.',
    includedItems: ['Offices', 'Small businesses', 'Professional spaces', 'Customer-facing areas'],
    whoItsFor:
      'For small businesses and professional environments that want a dependable, welcoming space for their team and visitors.',
    ctaLabel: 'Request a Commercial Quote',
    faqQuestions: [
      'Do you clean offices and commercial spaces?',
      'Which areas do you serve?',
      'How do I request a quote?',
    ],
  },
} satisfies Record<ServiceSlug, ServiceContent>;

export const servicePages: ServicePageContent[] = services.map((service) => {
  const content = contentBySlug[service.slug];
  return {
    slug: service.slug,
    name: service.name,
    description: service.description,
    image: service.image,
    pageTitle: content.pageTitle,
    intro: content.intro,
    includedHeading: 'What’s Included',
    includedItems: [...content.includedItems],
    whoHeading: 'Who It’s For',
    whoItsFor: content.whoItsFor,
    ctaLabel: content.ctaLabel,
    faqHeading: 'Frequently Asked Questions',
    faq: curatedFaq(content.faqQuestions),
  };
});
