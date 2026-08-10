import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteDescription, siteName, siteUrl } from '@/lib/site';

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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
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
      {/*
        The header and footer are rendered inside each page so that
        future per-page metadata and structured data can be added
        cleanly. The body remains a flex column so the footer sits
        flush to the bottom on short pages.
      */}
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
