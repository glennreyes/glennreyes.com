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
import { description } from '~/lib/constants';
import { composeTitle } from '~/lib/metadata';
import { Providers } from './providers';

export const metadata = {
  description,
  icons: {
    apple: appleTouchIcon.src,
    icon: [faviconIco.src, faviconPng.src],
  },
  manifest: '/manifest.webmanifest',
  title: composeTitle(),
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
