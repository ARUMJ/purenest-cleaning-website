import Link from 'next/link';

export type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
};

/**
 * Breadcrumb navigation for inner pages.
 *
 * The last item is the current page and is rendered as text with
 * `aria-current="page"`; earlier items link back up the hierarchy.
 */
export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-small text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden="true" className="text-muted/60">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-forest"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'font-medium text-charcoal' : ''}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
