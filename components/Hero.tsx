import Image from 'next/image';
import Link from 'next/link';
import { hero, primaryCta, secondaryCta } from '@/data/homepage';

/**
 * Hero.
 *
 * Two-column on desktop, single-column stack on mobile. The H1 is the
 * only H1 on the homepage and uses Playfair Display per the approved
 * Phase 4A typography rule (display font used selectively on major
 * editorial headings).
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      {/* Soft sand accent — restrained, top-right radial wash. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-sand/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-sage/20 blur-3xl"
      />

      <div className="container-content relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Copy column */}
        <div className="lg:col-span-7">
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 id="hero-heading" className="h1-display mt-4 text-balance">
            {hero.heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="lede mt-6 max-w-xl text-pretty">{hero.supporting}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="btn-primary"
              data-analytics-event="cta_click"
              data-analytics-label={primaryCta.label}
            >
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-small text-muted">
            {hero.reassurance.map((item, i) => (
              <li key={item} className="inline-flex items-center gap-2">
                {i > 0 ? (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sage" />
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-image shadow-card lg:max-w-none">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
