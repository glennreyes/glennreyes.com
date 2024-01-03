import { Intersection } from '@/components/intersection/intersection';
import { useContext, useEffect } from 'react';

export function useIntersection({
  root,
  rootMargin,
  threshold = 1,
}: IntersectionObserverInit = {}) {
  const { isInView, ref, setInstance } = useContext(Intersection);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInstance(entry ?? null);
        },
        {
          root,
          rootMargin,
          threshold,
        },
      );

      observer.observe(ref.current);

      return () => {
        setInstance(null);
        observer.disconnect();
      };
    }

    return () => null;
  }, [ref, root, rootMargin, setInstance, threshold]);

  return { isInView, ref };
}
