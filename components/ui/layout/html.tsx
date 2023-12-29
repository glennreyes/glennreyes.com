import clsx from 'clsx';
import { Inter, Roboto_Mono } from 'next/font/google';
import type { ComponentPropsWithoutRef } from 'react';

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: 'variable',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: 'variable',
});

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export function Html(props: HtmlProps) {
  const classes = clsx(
    mono.variable,
    sans.variable,
    'motion-safe:scroll-smooth',
  );

  return <html className={classes} lang="en" {...props} />;
}
