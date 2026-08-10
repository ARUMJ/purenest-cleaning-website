import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { serviceAreas } from '@/data/homepage';

/**
 * Service Areas.
 *
 * Calm typographic list of the six concept / demo cities. No fake
 * interactive map. Subtle sage-on-cream backdrop wash to keep the
 * section visually distinct without becoming decorative.
 */
export default function ServiceAreas() {
  return (
    <section
      aria-labelledby="service-areas-heading"
      className="section relative overflow-hidden bg-surface"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-sage/10 blur-3xl"
      />
      <div className="container-content relative">
        <SectionHeading
          id="service-areas-heading"
          eyebrow={serviceAreas.eyebrow}
          heading={serviceAreas.heading}
          supporting={serviceAreas.supporting}
          align="center"
        />

        <ul
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg font-medium text-charcoal sm:gap-x-10"
          aria-label="Cities served"
        >
          {serviceAreas.cities.map((city) => (
            <li
              key={city}
              className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-cream px-4 py-2"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
              {city}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link href={serviceAreas.cta.href} className="btn-secondary">
            {serviceAreas.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
