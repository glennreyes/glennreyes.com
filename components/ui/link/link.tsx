import type { ComponentPropsWithoutRef } from 'react';

import NextLink from 'next/link';

import { cn } from '@/lib/utils';

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link = ({ children, className, href, ...props }: LinkProps) => {
  const classes = cn(
    'rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
    className,
  );
  const source = typeof href === 'object' ? (href.pathname ?? '/') : href;

  if (source.startsWith('#')) {
    return (
      <a className={classes} href={source} {...props}>
        {children}
      </a>
    );
  }

  if (source.startsWith('http')) {
    return (
      <NextLink
        className={classes}
        href={source}
        rel="noreferrer noopener"
        target="_blank"
        {...props}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink className={classes} href={href} {...props}>
      {children}
    </NextLink>
  );
};
