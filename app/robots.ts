import type { MetadataRoute } from 'next';
import { indexingEnabled } from '@/lib/indexing';
import { siteUrl } from '@/lib/site';

/**
 * robots.txt (app/robots.ts) — environment-aware crawling rules.
 *
 * PureNest is a fictional portfolio / demo site, so by default robots.txt
 * disallows all crawling (`Disallow: /`). When indexing is enabled via
 * `NEXT_PUBLIC_ENABLE_INDEXING=true`, crawling is allowed and the sitemap
 * is advertised.
 */
export default function robots(): MetadataRoute.Robots {
  if (indexingEnabled) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    };
  }

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    host: siteUrl,
  };
}
