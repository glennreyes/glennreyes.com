import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon from '../assets/favicon.png';
import './globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';
import type { ReactNode } from 'react';

const plusJakartaSans = Plus_Jakarta_Sans();
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={plusJakartaSans.className} lang="en">
      <head>
        <title>Glenn Reyes</title>
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
      <body>{children}</body>
    </html>
  );
}
