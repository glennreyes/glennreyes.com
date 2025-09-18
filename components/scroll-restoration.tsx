'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
