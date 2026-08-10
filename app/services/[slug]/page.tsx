import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { servicePages } from '@/data/services';
import { buildPageMetadata } from '@/lib/seo';

/**
 * Individual service pages.
 *
 * Five approved routes (Phase 2 §15) — including the required
 * `/services/airbnb-cleaning` URL — are statically generated from
 * `data/services.ts`. Unknown slugs return the custom 404 page.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = servicePages.find((item) => item.slug === params.slug);
  if (!page) return {};

  return buildPageMetadata({
    title: `${page.name} in Dallas`,
    description: page.description,
    path: `/services/${page.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = servicePages.find((item) => item.slug === params.slug);
  if (!page) notFound();

  return <ServiceDetailPage data={page} />;
}
