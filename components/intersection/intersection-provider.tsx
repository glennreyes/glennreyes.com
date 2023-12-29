'use client';

import type { ReactNode } from 'react';
import { useState, useRef } from 'react';
import { Intersection } from './intersection2';

interface IntersectionProviderProps {
  children: ReactNode;
}

export function IntersectionProvider({ children }: IntersectionProviderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [instance, setInstance] = useState<IntersectionObserverEntry | null>(
    null,
  );
  const isInView = instance?.isIntersecting ?? true;

  return (
    <Intersection.Provider value={{ isInView, ref, setInstance }}>
      {children}
    </Intersection.Provider>
  );
}
