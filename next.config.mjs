/**
 * PureNest Cleaning Co. — Next.js configuration.
 *
 * Phase 5.4 additions:
 *  - Security headers applied to every response (CSP, framing, MIME
 *    sniffing, referrer, permissions). The CSP is intentionally kept
 *    compatible with Next.js (inline scripts/styles needed for the
 *    App Router) and with the self-hosted fonts, images, and the
 *    same-origin quote API.
 */

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // X-Frame-Options is a fallback for older browsers; modern browsers
  // honour the CSP `frame-ancestors` directive instead.
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Content-Security-Policy', value: CSP },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
