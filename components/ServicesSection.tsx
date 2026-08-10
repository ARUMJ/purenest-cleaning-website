import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { services, servicesSection } from '@/data/homepage';

/**
 * Services Overview.
 *
 * 3+2 grid on desktop (3 cards on top, 2 centered below) to avoid the
 * awkward 5-column squeeze. Single column on mobile, 2-up on small
 * tablets, intentional balance on larger screens.
 */
export default function ServicesSection() {
  const [first, second, third, fourth, fifth] = services;

  return (
    <section
      aria-labelledby="services-heading"
      className="section bg-cream"
    >
      <div className="container-content">
        <SectionHeading
          id="services-heading"
          eyebrow={servicesSection.eyebrow}
          heading={servicesSection.heading}
          supporting={servicesSection.supporting}
        />

        {/* Top row — 3 cards */}
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

        {/* Bottom row — 2 cards, centered */}
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
  );
}
