/**
 * PureNest Cleaning Co. — Indexing controls.
 *
 * PureNest is a fictional portfolio / demonstration website, so it is
 * EXCLUDED from search-engine indexing by default. To opt in (for
 * example, once the project represents a real business or a deploy
 * that should be indexed), set the build-time environment variable:
 *
 *   NEXT_PUBLIC_ENABLE_INDEXING=true
 *
 * This centralizes the decision so the metadata in the root layout and
 * the `robots.txt` output stay consistent.
 */

export const indexingEnabled =
  process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true' ||
  process.env.NEXT_PUBLIC_ENABLE_INDEXING === '1';

export type IndexingPolicy = { index: boolean; follow: boolean };

/**
 * Returns the metadata `robots` policy. `follow` is always kept true so
 * that crawlers can still discover the pages' links; only the index
 * flag changes based on the environment setting.
 */
export function indexingPolicy(): IndexingPolicy {
  if (indexingEnabled) {
    return { index: true, follow: true };
  }
  return { index: false, follow: true };
}
