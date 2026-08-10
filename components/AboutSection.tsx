import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { aboutSection } from '@/data/homepage';

/**
 * About PureNest — homepage teaser.
 *
 * Editorial split with the image on the left at md+ (mirroring the
 * Why PureNest section to create rhythm). The copy reproduces the
 * approved Phase 3 paragraphs verbatim.
 */
export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section bg-surface"
    >
      <div className="container-content grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-image shadow-card lg:max-w-none">
            <Image
              src="/images/about.svg"
              alt="Warm, organized interior that reflects PureNest's detail-focused approach."
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow={aboutSection.eyebrow}
            heading={aboutSection.heading}
          />

          <div className="mt-6 max-w-2xl space-y-4 text-body text-charcoal/85 text-pretty">
            {aboutSection.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <Link href={aboutSection.cta.href} className="btn-secondary">
              {aboutSection.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
