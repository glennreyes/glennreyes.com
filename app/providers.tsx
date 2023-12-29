'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { IntersectionProvider } from '@/components/intersection/intersection-provider';

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
