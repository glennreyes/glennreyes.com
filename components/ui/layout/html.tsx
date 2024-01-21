import type { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export const Html = (props: HtmlProps) => {
  const classes = clsx(
    GeistSans.variable,
    GeistMono.variable,
    'motion-safe:scroll-smooth',
  );

  return <html className={classes} lang="en" {...props} />;
};
