import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { whyPureNest } from '@/data/homepage';

/**
 * Why PureNest — editorial split layout (image + content).
 *
 * Image on the right at md+ to vary rhythm from the About section,
 * which uses image on the left. `tone` lets inner pages alternate
 * the section background without changing the approved copy.
 */
export default function WhyPureNestSection({ tone = 'surface' }: { tone?: 'cream' | 'surface' }) {
  return (
    <section
      aria-labelledby="why-heading"
      className={`section ${tone === 'cream' ? 'bg-cream' : 'bg-surface'}`}
    >
      <div className="container-content grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-image shadow-card lg:max-w-none">
            <Image
              src={whyPureNest.image.src}
              alt={whyPureNest.image.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:order-1">
          <SectionHeading
            eyebrow={whyPureNest.eyebrow}
            heading={whyPureNest.heading}
            supporting={whyPureNest.supporting}
          />

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyPureNest.benefits.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-2">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-7 bg-sage"
                />
                <h3 className="text-lg font-semibold text-charcoal">{benefit.title}</h3>
                <p className="text-small text-muted text-pretty">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
