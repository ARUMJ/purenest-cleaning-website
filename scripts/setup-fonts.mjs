#!/usr/bin/env node
/**
 * Download DM Sans and Playfair Display woff2 files into public/fonts/.
 *
 * This is a convenience script for developers with outbound network
 * access. It is safe to re-run; existing files are overwritten.
 *
 * The site works without these files — it falls back to system fonts.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'fonts');
mkdirSync(outDir, { recursive: true });

const files = [
  // [output filename, source URL]
  ['dm-sans-400.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-400-normal.woff2'],
  ['dm-sans-500.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-500-normal.woff2'],
  ['dm-sans-600.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-600-normal.woff2'],
  ['dm-sans-700.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/dm-sans@latest/latin-700-normal.woff2'],
  ['playfair-display-500.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-500-normal.woff2'],
  ['playfair-display-600.woff2', 'https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-600-normal.woff2'],
];

let ok = 0;
let failed = 0;

for (const [name, url] of files) {
  const dest = join(outDir, name);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    console.log(`  ✓ ${name} (${(buf.length / 1024).toFixed(1)} KB)`);
    ok++;
  } catch (err) {
    console.warn(`  ✗ ${name} — ${err.message}`);
    failed++;
  }
}

console.log(`\n${ok} of ${files.length} files downloaded.`);
if (failed > 0) {
  console.warn(
    'Some files could not be downloaded. The site will still build and run using system-font fallbacks.',
  );
  process.exit(0); // do not fail the install
}
