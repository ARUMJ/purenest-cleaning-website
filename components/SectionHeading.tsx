import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  heading: ReactNode;
  supporting?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

/**
 * Editorial section heading used throughout the homepage.
 *
 * The eyebrow, heading, and supporting copy pattern is the central
 * rhythm of the PureNest design language. This component enforces
 * the spacing and alignment without re-implementing it in every
 * section.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = 'left',
  as = 'h2',
  className = '',
}: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-2xl' : 'max-w-2xl';

  const HeadingTag = as;
  const headingClass =
    as === 'h1'
      ? 'h1-display text-balance'
      : as === 'h2'
      ? 'h2-display text-balance'
      : 'h3-default text-balance';

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <HeadingTag className={`${headingClass} mt-3`}>{heading}</HeadingTag>
      {supporting ? (
        <p className={`lede mt-4 text-pretty ${maxWidth} ${align === 'center' ? 'mx-auto' : ''}`}>
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
