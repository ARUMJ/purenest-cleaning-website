import Image from 'next/image';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  /** Optional breadcrumb rendered above the eyebrow (service pages). */
  breadcrumb?: ReactNode;
  align?: 'left' | 'center';
  /** Optional image rendered beside the copy on lg+ (service pages). */
  image?: { src: string; alt: string };
  /** Optional CTA row rendered below the intro. */
  children?: ReactNode;
};

/**
 * Inner-page hero.
 *
 * Shares the visual language of the homepage Hero (cream background,
 * restrained sand/sage radial washes, display heading, lede intro)
 * but is calmer and shorter so inner pages feel like the same site
 * without duplicating the homepage's full hero treatment.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  align = 'left',
  image,
  children,
}: Props) {
  const centered = align === 'center';

  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sand/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-sage/20 blur-3xl"
      />

      <div
        className={`container-content relative py-16 sm:py-20 lg:py-24 ${
          image ? 'grid items-center gap-10 lg:grid-cols-12 lg:gap-12' : ''
        }`}
      >
        <div
          className={
            image
              ? 'lg:col-span-7'
              : centered
                ? 'mx-auto max-w-3xl text-center'
                : 'max-w-3xl'
          }
        >
          {breadcrumb ? <div className="mb-6">{breadcrumb}</div> : null}

          <span className="eyebrow">{eyebrow}</span>

          <h1 id="page-hero-heading" className="h1-display mt-4 text-balance">
            {title}
          </h1>

          {intro ? (
            <p
              className={`lede mt-5 max-w-2xl text-pretty ${centered ? 'mx-auto' : ''}`}
            >
              {intro}
            </p>
          ) : null}

          {children ? (
            <div
              className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 ${
                centered ? 'sm:justify-center' : ''
              }`}
            >
              {children}
            </div>
          ) : null}
        </div>

        {image ? (
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-image shadow-card lg:max-w-none">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
