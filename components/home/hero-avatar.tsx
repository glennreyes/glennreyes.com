'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useIntersection } from '@/lib/hooks/use-intersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { ref } = useIntersection();

  return (
    <div className="h-34 w-34" ref={ref}>
      {children}
    </div>
  );
}
