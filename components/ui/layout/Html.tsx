import { Plus_Jakarta_Sans } from 'next/font/google';
import type { ComponentPropsWithoutRef } from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: 'variable',
});

type HtmlProps = Omit<ComponentPropsWithoutRef<'html'>, 'className' | 'lang'>;

export function Html(props: HtmlProps) {
  return <html className={plusJakartaSans.variable} lang="en" {...props} />;
}
