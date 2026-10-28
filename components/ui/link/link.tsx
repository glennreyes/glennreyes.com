import type { ComponentPropsWithoutRef } from 'react';
import type { UrlObject } from 'url';

import NextLink from 'next/link';

import { isAppRoute } from '@/lib/route';
import { cn } from '@/lib/utils';

type LinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, 'href'> & {
  href: string | UrlObject;
};

export function Link({ children, className, href, ...props }: LinkProps) {
  const classes = cn(
    'rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
    className,
  );

  if (typeof href === 'object') {
    return (
      <NextLink className={classes} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  if (href.startsWith('#') || !isAppRoute(href)) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith('http')) {
    return (
      <NextLink
        className={classes}
        href={href}
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
}
