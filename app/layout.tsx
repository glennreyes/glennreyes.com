import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { ReactNode } from 'react';
import { Providers } from './providers';
import { Footer } from '@/components/footer/footer';
import { Menu } from '@/components/navigation/menu';
import { Navbar } from '@/components/navigation/navbar';
import { Body } from '@/components/ui/layout/body';
import { Html } from '@/components/ui/layout/html';
import { Main } from '@/components/ui/layout/main';
import { description, origin, name, x } from '@/lib/constants';
import type { Viewport } from 'next';

const title = { default: name, template: `%s | ${name}` };

export const metadata = {
  description,
  metadataBase: new URL(origin),
  openGraph: {
    description,
    locale: 'en-US',
    siteName: name,
    title,
    type: 'website',
    url: origin,
  },
  title,
  twitter: {
    card: 'summary_large_image',
    creator: `@${x}`,
    site: `@${x}`,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Html suppressHydrationWarning>
      <head />
      <Body>
        <Providers>
          <Navbar>
            <Menu />
          </Navbar>
          <Main>{children}</Main>
        </Providers>
        <Footer />
        <Analytics />
      </Body>
    </Html>
  );
}
