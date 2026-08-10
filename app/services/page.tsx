import Link from 'next/link';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import WhyPureNest from '@/components/WhyPureNest';
import { services } from '@/data/homepage';
import { servicesHub } from '@/data/pages';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Cleaning Services for Homes, Rentals & Businesses',
  description:
    'Explore PureNest Cleaning Co. services: residential cleaning, deep cleaning, move-in/move-out, Airbnb & short-term rental cleaning, and commercial cleaning in the Dallas area.',
  path: '/services',
});

/**
 * Services hub — gateway to the five individual service pages
 * (Phase 2 §14): Hero → Services overview → Why PureNest → How It
 * Works → FAQ → CTA. Cards reuse the approved homepage card visuals.
 */
export default function ServicesPage() {
  const [first, second, third, fourth, fifth] = services;

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow={servicesHub.eyebrow}
          title={servicesHub.pageTitle}
          intro={servicesHub.intro}
          align="center"
        >
          <Link href={servicesHub.cta.href} className="btn-primary">
            {servicesHub.cta.label}
          </Link>
        </PageHero>

        {/* Services overview — 3 + 2 grid, same rhythm as the homepage */}
        <section aria-labelledby="all-services-heading" className="section bg-surface">
          <div className="container-content">
            <SectionHeading eyebrow="Our Services" heading="All Services" />

            <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
              <li className="h-full">
                <ServiceCard {...first} />
              </li>
              <li className="h-full">
                <ServiceCard {...second} />
              </li>
              <li className="h-full sm:col-span-2 lg:col-span-1">
                <ServiceCard {...third} />
              </li>
            </ul>

            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto lg:mt-7 lg:gap-7">
              <li className="h-full">
                <ServiceCard {...fourth} />
              </li>
              <li className="h-full">
                <ServiceCard {...fifth} />
              </li>
            </ul>
          </div>
        </section>

        <WhyPureNest tone="cream" />
        <HowItWorks tone="surface" />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
