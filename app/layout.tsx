'use client';

import { Navbar } from '../components/navigation/Navbar';
import { Main } from '../components/ui/Main';
import './main.css';
import { Plus_Jakarta_Sans } from '@next/font/google';
import type { ReactNode } from 'react';
import { Body } from '../components/ui/Body';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: 'variable',
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
      <Body>
        <Navbar />
        <Main>{children}</Main>
      </Body>
    </html>
  );
}
