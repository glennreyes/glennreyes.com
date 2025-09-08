'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import { IntersectionProvider } from '@/components/intersection/intersection-provider';
import { ScrollRestoration } from '@/components/scroll-restoration';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="data-theme">
    <IntersectionProvider>
      <ScrollRestoration />
      {children}
    </IntersectionProvider>
  </ThemeProvider>
);
