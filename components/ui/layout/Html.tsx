import { Inter } from 'next/font/google';
import type { ComponentPropsWithoutRef } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: 'variable',
});

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export function Html(props: HtmlProps) {
  return <html className={inter.variable} lang="en" {...props} />;
}
