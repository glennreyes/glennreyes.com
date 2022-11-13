'use client';

import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon from '../assets/favicon.png';
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
      <head>
        <title>
          Glenn Reyes - Software engineer, tech speaker and workshop instructor
        </title>
        <meta
          content="Software engineer, tech speaker and workshop instructor with a passion for building innovative products and user interfaces using cutting edge web technologies."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href={favicon.src} rel="icon" type="image/png" />
        <link href={appleTouchIcon.src} rel="apple-touch-icon" />
        <link href={appleTouchIcon.src} rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
