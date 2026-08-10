import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { notFoundPage } from '@/data/pages';

/**
 * Custom 404 page (App Router `not-found.tsx`).
 *
 * Rendered inside the root layout for any unmatched route, keeping
 * the site header, footer, and brand styling consistent with the
 * rest of the website.
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="flex flex-1 flex-col items-center justify-center bg-cream px-5 py-24 text-center sm:py-32"
      >
        <span
          aria-hidden="true"
          className="font-display text-7xl font-semibold leading-none text-forest sm:text-8xl"
        >
          {notFoundPage.code}
        </span>
        <h1 className="h1-display mt-5 text-balance">{notFoundPage.title}</h1>
        <p className="lede mt-5 max-w-xl text-pretty">{notFoundPage.copy}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href={notFoundPage.ctaHome.href} className="btn-primary">
            {notFoundPage.ctaHome.label}
          </Link>
          <Link href={notFoundPage.ctaServices.href} className="btn-secondary">
            {notFoundPage.ctaServices.label}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
