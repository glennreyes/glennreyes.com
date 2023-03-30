'use client';

import type { ReactNode } from 'react';
import { useIsInView } from '~/hooks/useIsInView';
import { Intersection } from './Intersection';

interface IntersectionProviderProps {
  children: ReactNode;
}

export function IntersectionProvider({ children }: IntersectionProviderProps) {
  const { ref, isInView } = useIsInView();

  return <Intersection.Provider value={{ isInView, ref }}>{children}</Intersection.Provider>;
}
