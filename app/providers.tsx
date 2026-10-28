'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';

import { IntersectionProvider } from '@/components/intersection/intersection-provider';
import { ScrollRestoration } from '@/components/scroll-restoration';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="data-theme">
    <IntersectionProvider>
      <Suspense fallback={null}>
        <ScrollRestoration />
      </Suspense>
      {children}
    </IntersectionProvider>
  </ThemeProvider>
);
