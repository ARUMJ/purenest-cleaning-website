import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { howItWorks } from '@/data/homepage';

/**
 * How It Works — three-step process.
 *
 * Large numeric markers rendered in the display font, restrained
 * copy, and a final CTA. The numeric markers are decorative; the
 * text label of each step carries the meaning. `tone` lets inner
 * pages alternate the section background without changing the
 * approved copy.
 */
export default function HowItWorks({ tone = 'cream' }: { tone?: 'cream' | 'surface' }) {
  return (
    <section
      aria-labelledby="how-heading"
      className={`section ${tone === 'surface' ? 'bg-surface' : 'bg-cream'}`}
    >
      <div className="container-content">
        <SectionHeading
          id="how-heading"
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          align="center"
          className="items-center"
        />

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((step) => (
            <li
              key={step.number}
              className="card relative flex flex-col gap-4 p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl font-semibold leading-none text-sage"
              >
                {step.number}
              </span>
              <h3 className="h3-default text-balance">{step.title}</h3>
              <p className="text-body text-muted text-pretty">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Link
            href={howItWorks.cta.href}
            className="btn-primary"
            data-analytics-event="cta_click"
            data-analytics-label={howItWorks.cta.label}
          >
            {howItWorks.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
