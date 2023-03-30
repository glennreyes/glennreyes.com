'use client';

import type { RefObject } from 'react';
import { createContext } from 'react';

interface IntersectionProps {
  isInView: boolean;
  ref: RefObject<HTMLDivElement>;
}

export const Intersection = createContext<IntersectionProps>({ isInView: true, ref: { current: null } });
