import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import Header from './Header';
import HowItWorks from './HowItWorks';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';
import type { ServicePageContent } from '@/data/services';

/**
 * ServiceDetailPage — shared template for the five individual service
 * pages. Reusable architecture per Phase 2 §15: Hero → What's Included
 * → Who It's For → How It Works → FAQ → CTA. Each page links back to
 * /services (breadcrumb + secondary CTA) and forward to /contact
 * (primary CTA) to keep the conversion path clear.
 */
export default function ServiceDetailPage({ data }: { data: ServicePageContent }) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={data.name}
          title={data.pageTitle}
          intro={data.intro}
          image={data.image}
          breadcrumb={
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: data.name },
              ]}
            />
          }
        >
          <Link href="/contact" className="btn-primary">
            {data.ctaLabel}
          </Link>
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </PageHero>

        {/* What's Included */}
        <section
          aria-labelledby={`${data.slug}-included-heading`}
          className="section bg-surface"
        >
          <div className="container-content grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What to Expect"
                heading={data.includedHeading}
                supporting="Typical focus areas for this service, based on the approved service scope."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.includedItems.map((item) => (
                  <li key={item} className="card flex items-center gap-3 p-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sage/25 text-forest"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-body font-medium text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section
          aria-labelledby={`${data.slug}-who-heading`}
          className="section bg-cream"
        >
          <div className="container-content">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Designed For</span>
              <h2 id={`${data.slug}-who-heading`} className="h2-display mt-4 text-balance">
                {data.whoHeading}
              </h2>
              <p className="lede mt-5 text-pretty">{data.whoItsFor}</p>
            </div>
          </div>
        </section>

        <HowItWorks tone="surface" />

        <FAQ heading={data.faqHeading} items={data.faq} tone="cream" />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
