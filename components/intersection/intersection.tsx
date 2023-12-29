'use client';

import type { Dispatch, RefObject, SetStateAction } from 'react';
import { createContext } from 'react';

interface IntersectionProps {
  isInView: boolean;
  ref: RefObject<HTMLDivElement>;
  setInstance: Dispatch<SetStateAction<IntersectionObserverEntry | null>>;
}

export const Intersection = createContext<IntersectionProps>({
  isInView: true,
  ref: { current: null },
  setInstance: () => null,
});
