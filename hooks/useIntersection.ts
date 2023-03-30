import { useContext, useEffect } from 'react';
import { Intersection } from '~/components/intersection/Intersection';

export function useIntersection({ root, rootMargin, threshold = 1 }: IntersectionObserverInit = {}) {
  const { ref, isInView, setInstance } = useContext(Intersection);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(([entry]) => setInstance(entry ?? null), {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(ref.current);

      return () => {
        setInstance(null);
        observer.disconnect();
      };
    }

    return () => undefined;
  }, [ref, root, rootMargin, setInstance, threshold]);

  return { isInView, ref };
}
