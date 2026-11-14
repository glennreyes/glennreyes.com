'use client';

import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';

import { useMounted } from '@/lib/hooks/use-mounted';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>;
}

export function SiteTelemetry() {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
