'use client';

import { useOffline } from 'next/offline';

export function OfflineBanner() {
  const isOffline = useOffline();

  if (!isOffline) {
    return null;
  }

  return (
    <output className="block bg-amber-50 px-4 py-3 text-center text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
      You&apos;re offline. Retrying when you reconnect.
    </output>
  );
}
