'use client';

import type { ReactNode } from 'react';

import { IntersectionProvider } from '@/components/intersection/intersection-provider';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class">
      <IntersectionProvider>{children}</IntersectionProvider>
    </ThemeProvider>
  );
}
