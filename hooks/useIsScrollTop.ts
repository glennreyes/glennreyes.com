import { useEffect, useState } from 'react';

export function useIsScrollTop() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollTop;
}
