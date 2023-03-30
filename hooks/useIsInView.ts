import { useRef } from 'react';
import { useIntersection } from 'react-use';

export function useIsInView() {
  const ref = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const isInView = intersection?.isIntersecting ?? true;

  return { isInView, ref };
}
