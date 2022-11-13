'use client';

import './main.css';
import { Plus_Jakarta_Sans } from '@next/font/google';
import type { ReactNode } from 'react';
import { Navbar } from '../components/navigation/Navbar';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
});
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={plusJakartaSans.variable} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
