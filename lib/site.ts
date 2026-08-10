/**
 * PureNest Cleaning Co. — Site-wide constants.
 *
 * PureNest is a fictional portfolio / demonstration website. Its
 * canonical URL is therefore environment-aware rather than a hard-coded
 * fictional domain:
 *
 *   1. `NEXT_PUBLIC_SITE_URL` (explicit override) if set,
 *   2. `VERCEL_URL` (the auto-assigned deployment URL) when deployed,
 *   3. `http://localhost:3000` as the local development fallback.
 *
 * The site is kept out of search-engine indexes by default (see
 * `lib/indexing.ts`); see the phase-05.4 doc for how to opt in.
 */

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '');
}

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl();

export const siteName = 'PureNest Cleaning Co.';

export const siteDescription =
  'Professional residential and commercial cleaning services for homes, rentals, and businesses in the Dallas area. Request a free quote from PureNest Cleaning Co.';

/**
 * Returns the absolute URL for a site path (e.g. "/contact" →
 * "https://…/contact"). Use this for canonical URLs, Open Graph URLs,
 * sitemaps, and robots references so they always match the environment.
 */
export function absoluteUrl(path: string): string {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}
