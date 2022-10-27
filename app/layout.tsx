import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon from '../assets/favicon.png';
import './globals.css';
import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Glenn Reyes</title>
        <meta
          name="description"
          content="Software engineer, tech speaker and workshop instructor with a passion for building innovative products and user interfaces using cutting edge web technologies."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href={favicon.src} type="image/png" />
        <link rel="apple-touch-icon" href={appleTouchIcon.src} />
        <link rel="apple-touch-icon" href={appleTouchIcon.src} />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
