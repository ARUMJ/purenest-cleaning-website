import Image from 'next/image';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TrustSection from '@/components/TrustSection';
import { aboutPage } from '@/data/pages';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About PureNest',
  description:
    'PureNest is built around a straightforward idea: getting professional cleaning should be easy. Learn about our approach, values, and how we serve homes, rentals, and businesses across the Dallas area.',
  path: '/about',
});

/**
 * About page (Phase 2 §10): Hero → Our Story → Our Approach →
 * Our Values → Why Customers Choose Us → CTA. Copy follows the
 * approved Phase 3 §19 content; no invented company history.
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={aboutPage.eyebrow}
          title={aboutPage.pageTitle}
          intro={aboutPage.intro}
          align="center"
        >
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </PageHero>

        {/* Our Story */}
        <section aria-labelledby="about-story-heading" className="section bg-surface">
          <div className="container-content grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-image shadow-card lg:max-w-none">
                <Image
                  src="/images/about.webp"
                  alt="Warm, organized interior that reflects PureNest’s detail-focused approach."
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading id="about-story-heading" eyebrow={aboutPage.eyebrow} heading={aboutPage.storyHeading} />

              <div className="mt-6 max-w-2xl space-y-4 text-body text-charcoal/85 text-pretty">
                {aboutPage.storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section aria-labelledby="about-approach-heading" className="section bg-cream">
          <div className="container-content">
            <SectionHeading
              id="about-approach-heading"
              eyebrow="How We Work"
              heading={aboutPage.approachHeading}
              supporting={aboutPage.approachLead}
              align="center"
            />

            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
              {aboutPage.approachPoints.map((point) => (
                <li key={point.title} className="card flex flex-col gap-3 p-7">
                  <span aria-hidden="true" className="h-[2px] w-8 bg-sage" />
                  <h3 className="h3-default text-balance">{point.title}</h3>
                  <p className="text-body text-muted text-pretty">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Values */}
        <section aria-labelledby="about-values-heading" className="section bg-surface">
          <div className="container-content">
            <SectionHeading id="about-values-heading" eyebrow="What We Stand For" heading={aboutPage.valuesHeading} align="center" />

            <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.values.map((value) => (
                <li key={value.title} className="card flex flex-col gap-3 p-7">
                  <h3 className="h3-default">{value.title}</h3>
                  <p className="text-body text-muted text-pretty">{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Customers Choose Us */}
        <TrustSection />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
