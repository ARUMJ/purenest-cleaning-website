import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://purenest.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PureNest Cleaning Co. | Professional Cleaning Services in Dallas',
    template: '%s | PureNest Cleaning Co.',
  },
  description:
    'Professional residential and commercial cleaning services for homes, rentals, and businesses in the Dallas area. Request a free quote from PureNest Cleaning Co.',
  applicationName: 'PureNest Cleaning Co.',
  authors: [{ name: 'PureNest Cleaning Co.' }],
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
    siteName: 'PureNest Cleaning Co.',
    title: 'PureNest Cleaning Co. | Professional Cleaning Services in Dallas',
    description:
      'Professional residential and commercial cleaning services for homes, rentals, and businesses in the Dallas area.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PureNest Cleaning Co. | Professional Cleaning Services in Dallas',
    description:
      'Professional residential and commercial cleaning services for homes, rentals, and businesses in the Dallas area.',
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
