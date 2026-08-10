/**
 * PureNest Cleaning Co. — Homepage Content (Single Source of Truth)
 *
 * All copy in this file comes directly from the approved project
 * documentation (Phase 3 content strategy + Phase 4B.1 homepage spec).
 *
 * It is intentionally typed and exhaustively listed so that:
 *   - section components can render without inline strings,
 *   - the approved copy is never accidentally rewritten, and
 *   - future pages can reuse the same brand data.
 *
 * Do not edit copy here without updating the corresponding phase
 * documentation in /docs and seeking approval.
 */

export const brand = {
  name: 'PureNest Cleaning Co.',
  shortName: 'PureNest',
  location: 'Dallas, Texas, USA',
  serviceAreaLabel: 'Dallas and selected surrounding communities',
} as const;

export const primaryCta = {
  label: 'Get a Free Quote',
  href: '/contact',
} as const;

export const secondaryCta = {
  label: 'Explore Our Services',
  href: '/services',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
] as const;

export const hero = {
  eyebrow: 'Dallas Area Cleaning Services',
  heading: ['Professional Cleaning.', 'A Fresher Space.', 'More Time for You.'],
  // Approved Phase 3 supporting copy (replaces the earlier "luxury" line).
  supporting:
    'Reliable residential and commercial cleaning services designed to keep your space fresh, comfortable, and ready for what comes next.',
  reassurance: ['Simple booking', 'Flexible services', 'Detail-focused cleaning'],
  image: {
    src: '/images/hero.webp',
    alt: 'Bright, naturally lit Dallas living room interior with warm tones and a clean, lived-in feel.',
  },
} as const;

export const trustMarkers = [
  {
    title: 'Professional Service',
    description: 'Consistent, dependable cleaning delivered by trained professionals.',
  },
  {
    title: 'Detail-Focused Cleaning',
    description: 'Thoughtful attention to the spaces and surfaces that matter most.',
  },
  {
    title: 'Flexible Options',
    description: 'Routine cleans, deep cleans, moves, rentals, and commercial spaces.',
  },
  {
    title: 'Local Service',
    description: 'Serving customers throughout the Dallas area and surrounding communities.',
  },
] as const;

export const servicesSection = {
  eyebrow: 'Our Services',
  heading: 'Cleaning That Fits Your Space',
  supporting:
    'From routine home cleaning to detailed deep cleans and commercial spaces, choose a service designed around what you need.',
};

export const services = [
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    description: 'Keep your home feeling fresh with dependable routine cleaning for everyday spaces.',
    image: {
      src: '/images/service-residential.webp',
      alt: 'Bright, organized residential living space cleaned and ready for daily life.',
    },
    detailImage: {
      src: '/images/service-residential-detail.webp',
      alt: 'Freshly cleaned kitchen and dining area prepared for everyday use.',
    },
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    description: 'Give your home a more thorough reset with detailed cleaning focused on the areas that need extra attention.',
    image: {
      src: '/images/service-deep.webp',
      alt: 'Detail-focused cleaning of a spotless kitchen sink and surrounding surfaces.',
    },
    detailImage: {
      src: '/images/service-deep-detail.webp',
      alt: 'Bright bathroom vanity and shower after a detailed clean.',
    },
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    description: 'Start fresh or leave your space ready for the next chapter with a detailed move-in or move-out clean.',
    image: {
      src: '/images/service-move.webp',
      alt: 'Empty, freshly cleaned interior prepared for a new occupant.',
    },
    detailImage: {
      src: '/images/service-move-detail.webp',
      alt: 'Sunlit hallway leading into a freshly cleaned empty home with moving boxes.',
    },
  },
  {
    slug: 'airbnb-cleaning',
    name: 'Airbnb & Short-Term Rental Cleaning',
    description: 'Keep your rental ready for the next guest with efficient turnover cleaning between stays.',
    image: {
      src: '/images/service-airbnb.webp',
      alt: 'Tidy short-term rental guest bedroom reset between stays.',
    },
    detailImage: {
      src: '/images/service-airbnb-detail.webp',
      alt: 'Warm, guest-ready bedroom with neatly layered bedding and pillows.',
    },
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    description: 'Maintain a clean, welcoming environment for your team, customers, and clients.',
    image: {
      src: '/images/service-commercial.webp',
      alt: 'Clean, professional commercial interior suitable for a small business environment.',
    },
    detailImage: {
      src: '/images/service-commercial-detail.webp',
      alt: 'Bright commercial office with clean glass partitions and polished floors.',
    },
  },
] as const;

export const whyPureNest = {
  eyebrow: 'Why PureNest',
  heading: 'A Simpler Way to Stay Clean',
  supporting:
    'Your time is valuable. PureNest is designed to make professional cleaning straightforward, flexible, and easy to arrange.',
  image: {
    src: '/images/about.webp',
    alt: 'Warm, organized interior that reflects PureNest’s detail-focused approach.',
  },
  benefits: [
    {
      title: 'Reliable Service',
      description: 'Cleaning support you can plan around your schedule.',
    },
    {
      title: 'Attention to Detail',
      description: 'Thoughtful cleaning focused on the spaces that matter.',
    },
    {
      title: 'Flexible Options',
      description: 'Services for routine cleaning, deep cleans, moves, rentals, and businesses.',
    },
    {
      title: 'Local Focus',
      description: 'Serving customers throughout the Dallas area and surrounding communities.',
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: 'How It Works',
  heading: 'A Cleaner Space in Three Simple Steps',
  cta: { label: 'Request a Free Quote', href: '/contact' },
  steps: [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Share a few details about your space and the cleaning service you’re looking for.',
    },
    {
      number: '02',
      title: 'Get Your Quote',
      description: 'We’ll review your request and help determine the right service for your needs.',
    },
    {
      number: '03',
      title: 'Enjoy a Fresher Space',
      description: 'Leave the cleaning to PureNest while you get back to the things that matter.',
    },
  ],
} as const;

export const aboutSection = {
  eyebrow: 'About PureNest',
  heading: 'Cleaning Made Simple',
  paragraphs: [
    'A clean space can make everyday life feel a little easier. PureNest was created around a simple idea: professional cleaning should be dependable, straightforward, and convenient.',
    'Whether you need regular home cleaning, a deeper reset, help preparing for a move, rental turnover support, or commercial cleaning, our services are designed to fit different spaces and different needs.',
  ],
  cta: { label: 'Learn More About Us', href: '/about' },
} as const;

export const testimonials = {
  eyebrow: 'Customer Experiences',
  heading: 'A Cleaner Experience, From Start to Finish',
  items: [
    {
      quote:
        'PureNest made the whole process feel easy. The team showed up on time, paid attention to the small details, and left the place looking genuinely cared for.',
      attribution: 'Sample testimonial • Portfolio demonstration',
    },
  ],
} as const;

export const serviceAreas = {
  eyebrow: 'Service Areas',
  heading: 'Proudly Serving the Dallas Area',
  supporting:
    'PureNest is designed to serve homes, rentals, and businesses throughout Dallas and surrounding communities.',
  cities: ['Dallas', 'Plano', 'Frisco', 'Irving', 'Richardson', 'Carrollton'],
  cta: { label: 'See Our Service Areas', href: '/service-areas' },
} as const;

export const faq = {
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'What cleaning services does PureNest offer?',
      answer:
        'PureNest offers residential cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, and commercial cleaning.',
    },
    {
      question: 'Do you offer recurring cleaning?',
      answer:
        'Yes. Recurring cleaning can be requested as part of your service needs. Contact us with details about your space and preferred schedule.',
    },
    {
      question: 'Do you offer deep cleaning?',
      answer:
        'Yes. Our deep-cleaning service is designed for spaces that need more detailed attention than routine cleaning.',
    },
    {
      question: 'Do you clean offices and commercial spaces?',
      answer:
        'Yes. Commercial cleaning is available for offices and other small business environments.',
    },
    {
      question: 'Do you offer move-in and move-out cleaning?',
      answer:
        'Yes. Move-in and move-out cleaning is available for customers preparing a property for a new occupant or leaving a property behind.',
    },
    {
      question: 'Which areas do you serve?',
      answer:
        'The PureNest concept currently focuses on Dallas and surrounding communities including Plano, Frisco, Irving, Richardson, and Carrollton.',
    },
    {
      question: 'How do I request a quote?',
      answer:
        'Complete our online quote form with a few details about your space and the service you need. We’ll use that information to understand your request.',
    },
  ],
} as const;

export const finalCta = {
  eyebrow: 'Ready for a Cleaner Space?',
  heading: 'Let’s Make Cleaning One Less Thing to Worry About.',
  supporting:
    'Tell us what you need and take the first step toward a fresher, more comfortable space.',
  cta: primaryCta,
} as const;

export const footer = {
  description:
    'Reliable residential and commercial cleaning services for homes, rentals, and businesses across the Dallas area.',
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' },
  ],
  serviceLinks: services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  contact: {
    addressLine: 'PureNest Cleaning Co.',
    city: 'Dallas, TX',
    email: 'hello@purenest.example',
    phone: '(000) 000-0000',
    note: 'Demo contact details — placeholder for portfolio purposes.',
  },
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  copyright: `© ${new Date().getFullYear()} PureNest Cleaning Co. — A fictional portfolio project.`,
} as const;
