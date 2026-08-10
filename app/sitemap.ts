import type { MetadataRoute } from 'next';
import { servicePages } from '@/data/services';
import { siteUrl } from '@/lib/site';

/**
 * Sitemap (app/sitemap.ts) — exposes the site's public routes.
 *
 * Note: PureNest is excluded from indexes by default (see
 * lib/indexing.ts). This file still generates a correct sitemap so the
 * structure is ready when indexing is enabled for a real deploy.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/service-areas`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
