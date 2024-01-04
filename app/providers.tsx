'use client';

import type { ReactNode } from 'react';

import { IntersectionProvider } from '@/components/intersection/intersection-provider';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class">
    <IntersectionProvider>{children}</IntersectionProvider>
  </ThemeProvider>
);
