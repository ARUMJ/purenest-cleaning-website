import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { contactPage } from '@/data/pages';
import { serviceOptions } from '@/lib/quote-options';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Request a Free Quote',
  description:
    'Request a free quote from PureNest Cleaning Co. Tell us about your space and the cleaning service you need — residential, deep, move-in/move-out, Airbnb, or commercial.',
  path: '/contact',
});

type SearchParams = {
  service?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

/**
 * Contact / Quote page (Phase 2 §16, Phase 3 §21).
 *
 * The QuoteForm is a client component that posts to the quote API
 * route /api/quote (see app/api/quote/route.ts), which delivers the
 * request as a real email via Resend.
 *
 * It accepts an optional `?service=` query param (set by the
 * service-detail "Get a quote" CTAs) to preselect the relevant service,
 * plus optional UTM params that are preserved as safe, non-PII source
 * context for the analytics abstraction.
 */
export default function ContactPage({ searchParams }: { searchParams?: SearchParams }) {
  const serviceParam = searchParams?.service?.trim() ?? '';
  // Only pass through a service value that is one of the known options.
  const defaultService = (serviceOptions as readonly string[]).includes(serviceParam)
    ? serviceParam
    : '';

  const source = {
    service: defaultService || undefined,
    utmSource: searchParams?.utm_source?.slice(0, 100) || undefined,
    utmMedium: searchParams?.utm_medium?.slice(0, 100) || undefined,
    utmCampaign: searchParams?.utm_campaign?.slice(0, 100) || undefined,
  };

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={contactPage.eyebrow}
          title={contactPage.pageTitle}
          intro={contactPage.intro}
          align="center"
        />

        <section aria-labelledby="quote-form-section-heading" className="section bg-surface">
          <h2 id="quote-form-section-heading" className="sr-only">
            Quote request form
          </h2>
          <div className="container-content grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <QuoteForm defaultService={defaultService} source={source} />
            </div>

            <aside className="lg:col-span-5" aria-label="More information">
              {/* What happens next */}
              <div className="card p-7">
                <h3 className="h3-default">{contactPage.stepsHeading}</h3>
                <ol className="mt-6 space-y-6">
                  {contactPage.steps.map((step) => (
                    <li key={step.number} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="font-display text-2xl font-semibold leading-none text-sage"
                      >
                        {step.number}
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-charcoal">{step.title}</h4>
                        <p className="mt-1 text-small text-muted text-pretty">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Demo contact details */}
              <div className="card mt-6 p-7">
                <h3 className="h3-default">{contactPage.contactHeading}</h3>
                <address className="mt-4 not-italic text-small text-charcoal/85">
                  <div>{contactPage.contact.addressLine}</div>
                  <div>{contactPage.contact.city}</div>
                  <div className="mt-2">
                    <a
                      href={`mailto:${contactPage.contact.email}`}
                      className="transition-colors duration-200 hover:text-forest"
                      data-analytics-event="email_click"
                    >
                      {contactPage.contact.email}
                    </a>
                  </div>
                  <div className="mt-1">
                    <a
                      href={`tel:${contactPage.contact.phone}`}
                      className="transition-colors duration-200 hover:text-forest"
                      data-analytics-event="phone_click"
                    >
                      {contactPage.contact.phone}
                    </a>
                  </div>
                  <p className="mt-3 text-[12px] italic text-muted">{contactPage.contact.note}</p>
                </address>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
