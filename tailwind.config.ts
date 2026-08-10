import type { Config } from 'tailwindcss';

/**
 * PureNest Cleaning Co. — Tailwind configuration.
 *
 * Design tokens originate from the approved Phase 4A design system
 * (docs/phase-04a-design-direction-design-system.md) and are exposed
 * both as raw color values and as semantic Tailwind tokens so that
 * components read clearly in markup (e.g. `bg-forest` vs `bg-[#173F35]`).
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Approved Phase 4A palette
        forest: '#173F35',
        sage: '#8FAF9F',
        sand: '#DCC9A3',
        cream: '#F7F6F1',
        charcoal: '#26322E',
        muted: '#66736D',
        // Surfaces
        surface: '#FFFFFF',
        // Aliases that read more naturally in markup
        primary: '#173F35',
        'primary-foreground': '#FFFFFF',
        background: '#F7F6F1',
        foreground: '#26322E',
        border: '#E6E3D9',
      },
      fontFamily: {
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Playfair Display',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
      },
      fontSize: {
        // Approved Phase 4A desktop hierarchy (mid-range values)
        'display-1': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }], // 56px
        'display-2': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }], // 44px
        'h3': ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }], // 26px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body': ['1rem', { lineHeight: '1.65' }], // 16px
        'small': ['0.875rem', { lineHeight: '1.55' }], // 14px
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.14em' }], // 12px tracked
      },
      borderRadius: {
        'btn': '10px',
        'card': '14px',
        'image': '14px',
      },
      maxWidth: {
        content: '1200px',
        prose: '65ch',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(38, 50, 46, 0.04), 0 8px 24px rgba(38, 50, 46, 0.05)',
        'card-hover': '0 2px 4px rgba(38, 50, 46, 0.05), 0 16px 36px rgba(38, 50, 46, 0.08)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 220ms ease-out',
        'accordion-up': 'accordion-up 180ms ease-out',
        'fade-up': 'fade-up 480ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
