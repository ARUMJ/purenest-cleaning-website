import Link from 'next/link';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { curatedFaq } from '@/data/services';
import { serviceAreasPage } from '@/data/pages';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Service Areas',
  description:
    'PureNest Cleaning Co. concept service areas: Dallas, Plano, Frisco, Irving, Richardson, and Carrollton. Request a free quote today.',
  path: '/service-areas',
});

/**
 * Service Areas page (Phase 2 §12): Hero → Cities & Communities →
 * Local service explanation → FAQ → CTA. The six approved demo
 * cities are shown without a fake map or per-city SEO pages, and
 * the fictional nature of the coverage is stated explicitly.
 */
export default function ServiceAreasPage() {
  const areasFaq = curatedFaq([
    'Which areas do you serve?',
    'How do I request a quote?',
  ]);

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={serviceAreasPage.eyebrow}
          title={serviceAreasPage.pageTitle}
          intro={serviceAreasPage.intro}
          align="center"
        >
          <Link href={serviceAreasPage.cta.href} className="btn-primary">
            {serviceAreasPage.cta.label}
          </Link>
        </PageHero>

        {/* Cities & Communities */}
        <section aria-labelledby="service-areas-cities-heading" className="section bg-surface">
          <div className="container-content">
            <SectionHeading
              eyebrow={serviceAreasPage.eyebrow}
              heading={serviceAreasPage.citiesHeading}
              supporting={serviceAreasPage.demoNote}
              align="center"
            />

            <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreasPage.cities.map((city) => (
                <li key={city.name} className="card flex flex-col gap-3 p-7">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream font-display text-sm font-semibold"
                  >
                    {city.name.charAt(0)}
                  </span>
                  <h3 className="h3-default">{city.name}</h3>
                  <p className="text-body text-muted text-pretty">{city.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Local service */}
        <section aria-labelledby="service-areas-local-heading" className="section bg-cream">
          <div className="container-content">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Local Focus</span>
              <h2 id="service-areas-local-heading" className="h2-display mt-4 text-balance">
                {serviceAreasPage.localHeading}
              </h2>
              <p className="lede mt-5 text-pretty">{serviceAreasPage.localNote}</p>
              <p className="mt-6 inline-block rounded-full border border-border/70 bg-surface px-4 py-2 text-small text-muted">
                {serviceAreasPage.demoNote}
              </p>
            </div>
          </div>
        </section>

        <FAQ heading="Frequently Asked Questions" items={areasFaq} tone="surface" />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
