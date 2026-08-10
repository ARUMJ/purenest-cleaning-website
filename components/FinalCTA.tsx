import Link from 'next/link';
import { finalCta } from '@/data/homepage';

/**
 * Final CTA.
 *
 * A forest-green panel on the cream page background, with a soft sand
 * accent strip across the top. The supporting copy paragraph is
 * included, and the CTA is the primary forest-on-white button so the
 * conversion action reads cleanly.
 */
export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section bg-cream"
    >
      <div className="container-content">
        <div className="relative overflow-hidden rounded-card bg-forest text-white shadow-card">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-sand"
          />

          <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <span className="inline-block text-eyebrow font-semibold uppercase tracking-[0.14em] text-sand">
              {finalCta.eyebrow}
            </span>

            <h2
              id="final-cta-heading"
              className="font-display mt-4 text-balance text-white"
              style={{
                fontSize: 'clamp(2rem, 1.4rem + 2.4vw, 3rem)',
                lineHeight: 1.1,
              }}
            >
              {finalCta.heading}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-white/80 text-body-lg">
              {finalCta.supporting}
            </p>

            <div className="mt-9 flex justify-center">
              <Link
                href={finalCta.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-cream px-6 py-3 text-small font-semibold text-forest shadow-card transition-all duration-250 hover:bg-white hover:shadow-card-hover"
                style={{ minHeight: 44 }}
              >
                {finalCta.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
