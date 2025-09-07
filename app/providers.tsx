'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import { IntersectionProvider } from '@/components/intersection/intersection-provider';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class">
    <IntersectionProvider>{children}</IntersectionProvider>
  </ThemeProvider>
);
