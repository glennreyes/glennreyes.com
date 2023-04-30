'use client';

import { IntersectionProvider } from '@/components/intersection/IntersectionProvider';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

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
