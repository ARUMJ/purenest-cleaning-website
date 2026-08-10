import type { Metadata } from 'next';
import { absoluteUrl, siteName } from './site';

type PageMetadataArgs = {
  /** Page title (the root layout appends " | PureNest Cleaning Co."). */
  title: string;
  description: string;
  /** Route path, e.g. "/services/residential-cleaning". */
  path: string;
  ogType?: 'website' | 'article';
};

/**
 * Builds page-level metadata (title, description, canonical URL, Open
 * Graph, and Twitter card) consistent with the approved SEO content
 * strategy (Phase 3, sections 23–24).
 *
 * The canonical URL is resolved to an absolute, environment-aware URL
 * (see lib/site.ts) so it always matches the current deploy instead of a
 * hard-coded fictional domain. `metadataBase` is also set in the root
 * layout as a fallback.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogType = 'website',
}: PageMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url,
      siteName,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
