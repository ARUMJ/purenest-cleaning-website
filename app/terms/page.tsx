import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for PureNest Cleaning Co. — a demonstration placeholder for a fictional portfolio project. No real services are offered.',
  path: '/terms',
});

/**
 * Terms of Service — demonstration placeholder.
 *
 * PureNest is a fictional portfolio project, so this is intentionally
 * not a real legal document. It describes the site honestly as a
 * demonstration without inventing terms for a real business.
 */
export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          intro="A demonstration placeholder for a fictional portfolio project — not a real legal document."
          align="center"
        />

        <section className="section bg-surface">
          <div className="container-content max-w-3xl">
            <div className="space-y-10">
              <div>
                <h2 className="h3-default">Demonstration Purpose</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  PureNest Cleaning Co. is a fictional portfolio project created to demonstrate
                  what a professional local cleaning-business website could look like. It is not a
                  real business, and no real cleaning services are offered or promised.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Services Described on This Site</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  All services, pricing, service areas, testimonials, and contact details shown on
                  this site are concept / demonstration content. Nothing here constitutes an offer
                  of services.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Quote Requests</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  Submitting the quote form runs a local demonstration flow. It does not create a
                  contract or an obligation of any kind.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Changes</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  This placeholder may be replaced by real terms if the project evolves beyond a
                  portfolio demonstration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
