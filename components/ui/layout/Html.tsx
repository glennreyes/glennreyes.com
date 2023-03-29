import clsx from 'clsx';
import { Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import type { ComponentPropsWithoutRef } from 'react';

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: 'variable',
});

const sans = localFont({
  src: '../../../assets/fonts/Inter.var.woff2',
  variable: '--font-sans',
  weight: 'variable',
});

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export function Html(props: HtmlProps) {
  const classes = clsx(mono.variable, sans.variable, 'scroll-smooth');

  return <html className={classes} lang="en" {...props} />;
}
