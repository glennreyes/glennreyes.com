'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { IntersectionProvider } from '~/components/intersection/IntersectionProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <IntersectionProvider>{children}</IntersectionProvider>
    </ThemeProvider>
  );
}
