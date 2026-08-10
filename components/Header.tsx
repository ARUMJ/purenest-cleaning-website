import Link from 'next/link';
import { brand, navigation, primaryCta } from '@/data/homepage';
import MobileNav from './MobileNav';

/**
 * Site Header.
 *
 * Server component. Renders the desktop navigation and delegates
 * mobile navigation to the client-only `MobileNav` component, which
 * owns open/close state and focus management.
 */
export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70"
    >
      <div className="container-content flex h-16 items-center justify-between gap-6 lg:h-20">
        {/* Wordmark */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-charcoal"
          aria-label={`${brand.name} — Home`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-btn bg-forest text-cream font-display text-lg font-semibold leading-none"
          >
            P
          </span>
          <span className="font-display text-lg font-semibold leading-none tracking-tight">
            {brand.shortName}
            <span className="ml-1 text-muted font-sans text-sm font-normal">Cleaning Co.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1"
        >
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-btn px-3 py-2 text-small font-medium text-charcoal transition-colors duration-200 hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={primaryCta.href}
            className="btn-primary ml-3"
            data-analytics-event="cta_click"
            data-analytics-label={primaryCta.label}
          >
            {primaryCta.label}
          </Link>
        </nav>

        {/* Mobile menu trigger (rendered on the right) */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
