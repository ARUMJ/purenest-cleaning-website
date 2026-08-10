import type { Metadata, Viewport } from 'next';
import './globals.css';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { absoluteUrl, siteDescription, siteName, siteUrl } from '@/lib/site';
import { indexingPolicy } from '@/lib/indexing';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Professional Cleaning Services in Dallas`,
    template: '%s | PureNest Cleaning Co.',
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  generator: 'Next.js',
  keywords: [
    'cleaning services Dallas',
    'house cleaning Dallas',
    'residential cleaning Dallas',
    'deep cleaning Dallas',
    'commercial cleaning Dallas',
    'move-out cleaning Dallas',
    'Airbnb cleaning Dallas',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} | Professional Cleaning Services in Dallas`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Professional Cleaning Services in Dallas`,
    description: siteDescription,
  },
  // Environment-aware indexing: PureNest is a fictional portfolio site,
  // so it is excluded from indexes by default (see lib/indexing.ts).
  robots: {
    index: indexingPolicy().index,
    follow: indexingPolicy().follow,
    googleBot: {
      index: indexingPolicy().index,
      follow: indexingPolicy().follow,
    },
  },
  alternates: {
    canonical: absoluteUrl('/'),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#173F35',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Skip link for keyboard / screen-reader users. Becomes
            visible on focus and jumps straight to the page content. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-forest focus:px-4 focus:py-3 focus:text-cream focus:shadow-card"
        >
          Skip to content
        </a>

        {/* Mounts the provider-neutral event tracker (no cookies, no PII). */}
        <AnalyticsTracker />

        {children}
      </body>
    </html>
  );
}
