import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import { footer } from '@/data/homepage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for PureNest Cleaning Co. — a demonstration placeholder for a fictional portfolio project. The quote form stores and transmits no data.',
  path: '/privacy',
});

/**
 * Privacy Policy — demonstration placeholder.
 *
 * PureNest is a fictional portfolio project, so this is intentionally
 * not a real legal document. It states plainly what the demo site
 * actually does (the quote form currently stores and transmits no
 * data) without inventing a real company's practices.
 */
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          intro="A demonstration placeholder for a fictional portfolio project — not a real legal document."
          align="center"
        />

        <section className="section bg-surface">
          <div className="container-content max-w-3xl">
            <div className="space-y-10">
              <div>
                <h2 className="h3-default">What This Page Is</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  PureNest Cleaning Co. is a fictional portfolio website. This Privacy Policy is a
                  placeholder that shows where a real policy would live once a real business
                  exists. It makes no claims about a real company.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Information on This Site</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  The quote form asks for a name, email, phone number, property details, and
                  service preferences. In the current demonstration build, the form submits to a
                  local demo API that validates the input and returns a sample response. No
                  information is stored, logged, or sent to any third party.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Future Use</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  If real email or CRM delivery is added in a later phase, this page would be
                  updated to describe how submitted information is used and stored.
                </p>
              </div>

              <div>
                <h2 className="h3-default">Contact</h2>
                <p className="mt-3 text-body text-charcoal/85 text-pretty">
                  Demo contact placeholder: {footer.contact.email} • {footer.contact.phone}. This
                  is fictional placeholder information.
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
