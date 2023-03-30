'use client';

import type { ReactNode } from 'react';
import { IntersectionProvider } from '../intersection/IntersectionProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <IntersectionProvider>{children}</IntersectionProvider>;
}
