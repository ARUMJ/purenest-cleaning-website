'use client';

import Link from 'next/link';
import { brand } from '@/data/homepage';

/**
 * Global error boundary (`app/global-error.tsx`).
 *
 * Replaces the root layout when an uncaught error bubbles past the
 * segment error boundaries, so it must render its own <html>/<body>.
 * It is intentionally minimal and branded, and never exposes the
 * underlying error details.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <main
          id="main"
          className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:py-32"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-14 w-14 items-center justify-center rounded-btn bg-forest font-display text-2xl font-semibold text-cream"
          >
            P
          </span>
          <p className="eyebrow mt-8">Something went wrong</p>
          <h1 className="h1-display mt-4 max-w-xl text-balance">
            We hit an unexpected problem.
          </h1>
          <p className="lede mt-5 max-w-xl text-pretty">
            Please try again, or return to the homepage.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button type="button" onClick={reset} className="btn-primary">
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
          <p className="mt-10 text-[12px] text-muted">
            {brand.name} — A fictional portfolio project.
          </p>
        </main>
      </body>
    </html>
  );
}
