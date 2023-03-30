'use client';

import type { ReactNode } from 'react';
import { IntersectionProvider } from '../intersection/InterSectionProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <IntersectionProvider>{children}</IntersectionProvider>
    </>
  );
}
