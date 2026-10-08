'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
}
