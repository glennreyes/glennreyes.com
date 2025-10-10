'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { unstable_ViewTransition as ViewTransition } from 'react';

import { useIntersection } from '@/lib/hooks/use-intersection';

import { AVATAR_VIEW_TRANSITION_NAME } from '../avatar/avatar';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { ref } = useIntersection();

  return (
    <div className="h-34 w-34" ref={ref}>
      <ViewTransition name={AVATAR_VIEW_TRANSITION_NAME}>
        {children}
      </ViewTransition>
    </div>
  );
}
