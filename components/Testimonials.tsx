import SectionHeading from './SectionHeading';
import { testimonials } from '@/data/homepage';

/**
 * Testimonials.
 *
 * Restrained editorial block, typography-led. The fictional / portfolio
 * demonstration label is rendered on every quote — never implied,
 * always explicit.
 */
export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section bg-cream"
    >
      <div className="container-content">
        <SectionHeading
          id="testimonials-heading"
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.items.map((item, i) => (
            <li key={i}>
              <figure className="card flex h-full flex-col gap-5 p-8">
                <svg
                  aria-hidden="true"
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  className="text-sage"
                >
                  <path
                    d="M0 22V12.6C0 8.9 0.8 5.9 2.4 3.6C4.0 1.2 6.4 0 9.6 0L11 3.6C9.2 4.0 7.9 4.8 7.0 6.0C6.1 7.2 5.7 8.7 5.7 10.4H11V22H0ZM17 22V12.6C17 8.9 17.8 5.9 19.4 3.6C21.0 1.2 23.4 0 26.6 0L28 3.6C26.2 4.0 24.9 4.8 24.0 6.0C23.1 7.2 22.7 8.7 22.7 10.4H28V22H17Z"
                    fill="currentColor"
                  />
                </svg>

                <blockquote className="font-display text-xl leading-relaxed text-charcoal text-balance">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-auto text-small text-muted">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sand/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal">
                    {item.attribution}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
