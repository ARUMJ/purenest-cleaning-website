# Self-Hosted Fonts

This project uses **self-hosted** DM Sans and Playfair Display so that:

- Builds do not depend on outbound network access to Google Fonts,
- Vercel deploys are deterministic and reproducible,
- Privacy is preserved (no third-party font requests at runtime),
- Performance is improved (no extra DNS lookup / TLS handshake to fonts.gstatic.com).

## Files

Place the following files in this directory (the names below are the
convention used by `app/layout.tsx`):

- `dm-sans-400.woff2`
- `dm-sans-500.woff2`
- `dm-sans-600.woff2`
- `dm-sans-700.woff2`
- `playfair-display-500.woff2`
- `playfair-display-600.woff2`

If these files are absent, the application falls back to a curated
system-font stack (`ui-sans-serif`, `Georgia`) and continues to build
and run. The site will look correct in either case.

## How to obtain the font files

If you have outbound network access, run the following commands from
the project root to download the woff2 files into this directory:

```sh
# DM Sans — Latin subset, weights 400 / 500 / 600 / 700
curl -L -o public/fonts/dm-sans-400.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.woff2"
curl -L -o public/fonts/dm-sans-500.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.woff2"
curl -L -o public/fonts/dm-sans-600.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.woff2"
curl -L -o public/fonts/dm-sans-700.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.woff2"

# Playfair Display — Latin subset, weights 500 / 600
curl -L -o public/fonts/playfair-display-500.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-500-normal.woff2"
curl -L -o public/fonts/playfair-display-600.woff2 "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-600-normal.woff2"
```

The `npm run setup:fonts` script does the same thing.

## License

Both fonts are licensed under the SIL Open Font License (OFL) 1.1.
The OFL permits free use, redistribution, and embedding in software
and websites, including commercial use, provided the copyright and
license notice are preserved with the font files.
