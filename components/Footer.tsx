import Link from 'next/link';
import { brand, footer } from '@/data/homepage';

/**
 * Site Footer.
 *
 * Four-column layout on desktop, two-column groups on tablet, fully
 * stacked on mobile. Contact column uses the approved demo
 * placeholders only — no real personal details.
 */
export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border/60">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2" aria-label={`${brand.name} — Home`}>
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-btn bg-forest text-cream font-display text-lg font-semibold leading-none"
              >
                P
              </span>
              <span className="font-display text-lg font-semibold leading-none tracking-tight text-charcoal">
                {brand.shortName}
                <span className="ml-1 text-muted font-sans text-sm font-normal">Cleaning Co.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-small text-muted text-pretty">
              {footer.description}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-forest">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footer.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-charcoal/85 transition-colors duration-200 hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-forest">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footer.serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-charcoal/85 transition-colors duration-200 hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-forest">
              Contact
            </h3>
            <address className="mt-4 not-italic text-small text-charcoal/85">
              <div>{footer.contact.addressLine}</div>
              <div>{footer.contact.city}</div>
              <div className="mt-2">
                <Link href={`mailto:${footer.contact.email}`} className="hover:text-forest">
                  {footer.contact.email}
                </Link>
              </div>
              <div>{footer.contact.phone}</div>
              <p className="mt-3 text-muted text-[12px] italic">
                {footer.contact.note}
              </p>
            </address>
          </div>
        </div>

        <hr className="my-10 border-border/70" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[12px] text-muted">{footer.copyright}</p>
          <ul className="flex items-center gap-5 text-[12px] text-muted">
            {footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-forest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
