'use client';

import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Preferences } from '@ui-sdk/react/preferences';
import { colorScheme } from '@/lib/theme';

import { useMounted } from '@/lib/hooks/use-mounted';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Preferences preferences={[colorScheme]}>{children}</Preferences>;
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
