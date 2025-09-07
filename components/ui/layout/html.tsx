import type { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';
import { Geist, Geist_Mono } from 'next/font/google';

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

const geist = Geist({
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
});

export const Html = (props: HtmlProps) => {
  const classes = clsx(
    geist.className,
    geistMono.className,
    'motion-safe:scroll-smooth',
  );

  return <html className={classes} lang="en" {...props} />;
};
