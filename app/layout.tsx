import type { ReactNode } from 'react';
import '~/app/globals.css';
import appleTouchIcon from '~/assets/favicon/apple-touch-icon.png';
import faviconIco from '~/assets/favicon/favicon.ico';
import faviconPng from '~/assets/favicon/favicon.png';
import { Footer } from '~/components/footer/Footer';
import { Menu } from '~/components/navigation/Menu';
import { Navbar } from '~/components/navigation/Navbar';
import { Body } from '~/components/ui/layout/Body';
import { Html } from '~/components/ui/layout/Html';
import { Main } from '~/components/ui/layout/Main';
import { description, origin, name } from '~/lib/constants';
import { Providers } from './providers';

const ogImages = [{ height: 1080, url: `${origin}/og.png`, width: 1920 }];
const title = { default: name, template: `%s | ${name}` };

export const metadata = {
  description,
  icons: {
    apple: { type: 'image/png', url: appleTouchIcon.src },
    icon: [
      { type: 'image/png', url: faviconIco.src },
      { type: 'image/png', url: faviconPng.src },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    description,
    images: ogImages,
    locale: 'en-US',
    siteName: name,
    title,
    type: 'website',
    url: origin,
  },
  themeColor: [
    { color: '#020617', media: '(prefers-color-scheme: dark)' },
    { color: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
  title,
  twitter: {
    card: 'summary_large_image',
    description,
    images: ogImages,
    title,
  },
  viewport: 'width=device-width, initial-scale=1',
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
      </Body>
    </Html>
  );
}
