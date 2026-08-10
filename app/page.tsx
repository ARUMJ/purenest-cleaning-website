import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import WhyPureNest from '@/components/WhyPureNest';
import HowItWorks from '@/components/HowItWorks';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <WhyPureNest />
        <HowItWorks />
        <AboutSection />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
