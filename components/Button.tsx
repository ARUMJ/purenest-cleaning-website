import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * PureNest Button primitive.
 *
 * Renders an <a> when an `href` is provided (via Next.js Link for client
 * navigation) and a real <button> otherwise. Variants map to the approved
 * Phase 4A button styling: primary (forest on white) and secondary
 * (restrained outlined / ghost).
 */

type Variant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

type SharedProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLinkProps = SharedProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props;
  const classes = `${variantClasses[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
