'use client';

import { Transition } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useIntersection } from '@/lib/hooks/use-intersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { ref, isInView } = useIntersection();

  return (
    <div className="h-40 w-40" ref={ref}>
      <Transition
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 scale-95"
        show={isInView}
      >
        {children}
      </Transition>
    </div>
  );
}
