import { ImageResponse } from 'next/og';
import { siteDescription, siteName } from '@/lib/site';

/**
 * Dynamic Open Graph image (app/opengraph-image.tsx).
 *
 * Generated at build time with `next/og` — no static asset required.
 * Uses the approved Phase 4A palette (forest / cream / sand) and only
 * the approved brand name and description. It introduces no invented
 * business information.
 */

export const alt = `${siteName} — professional cleaning services for the Dallas area.`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FOREST = '#173F35';
const CREAM = '#F7F6F1';
const SAND = '#DCC9A3';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: FOREST,
          color: CREAM,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '88px',
              height: '88px',
              borderRadius: '18px',
              backgroundColor: CREAM,
              color: FOREST,
              fontSize: '52px',
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {siteName}
            </span>
            <span style={{ fontSize: '26px', color: SAND, marginTop: '6px' }}>
              Professional cleaning for the Dallas area
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
          <span
            style={{
              fontSize: '34px',
              lineHeight: 1.4,
              color: CREAM,
              opacity: 0.92,
              maxWidth: '960px',
            }}
          >
            {siteDescription}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
