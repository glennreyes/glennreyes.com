'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function NavbarBorder() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const classes = clsx(
    'absolute inset-x-0 bottom-0 border-t transition',
    isScrollTop ? 'border-stone-50/0' : 'border-stone-50/50',
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrollTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={classes} />;
}
