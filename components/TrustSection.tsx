import { trustMarkers } from '@/data/homepage';

/**
 * Trust / Credibility section.
 *
 * Renders a calm, typographic row of trust markers. No Material icons,
 * no fake badges, no rating counts. Each marker is a real <article>
 * with a heading and a one-line description so the row reads as
 * editorial content rather than a SaaS strip.
 */
export default function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="section-tight border-y border-border/60 bg-surface"
    >
      <div className="container-content">
        <h2 id="trust-heading" className="sr-only">
          Why customers choose PureNest
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustMarkers.map((marker) => (
            <li key={marker.title}>
              <article className="flex flex-col gap-2">
                <span aria-hidden="true" className="h-[2px] w-8 bg-forest" />
                <h3 className="h3-default">{marker.title}</h3>
                <p className="text-small text-muted text-pretty">{marker.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
