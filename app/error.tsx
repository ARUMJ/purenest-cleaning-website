'use client';

import Link from 'next/link';
import { brand } from '@/data/homepage';

/**
 * Branded error boundary (App Router `error.tsx`).
 *
 * Rendered inside the root layout when a page throws at render time.
 * It is a client component, so it renders its own branded markup
 * (server components such as Header/Footer cannot be imported here).
 * It shows only a safe, generic message — never the underlying error.
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main"
      className="flex flex-1 flex-col items-center justify-center bg-cream px-5 py-24 text-center sm:py-32"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-14 w-14 items-center justify-center rounded-btn bg-forest font-display text-2xl font-semibold text-cream"
      >
        P
      </span>
      <p className="eyebrow mt-8">Something went wrong</p>
      <h1 className="h1-display mt-4 max-w-xl text-balance">
        We couldn’t load this page right now.
      </h1>
      <p className="lede mt-5 max-w-xl text-pretty">
        An unexpected error occurred. You can try again, or head back to the homepage.
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
  );
}
