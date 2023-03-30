'use client';

import { Transition } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useIntersection } from '~/hooks/useIntersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { ref, isInView } = useIntersection();

  return (
    <div className="h-40 w-40" ref={ref}>
      <Transition
        enter="transition delay-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100"
        leave="transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 scale-90 -translate-y-full"
        show={isInView}
      >
        {children}
      </Transition>
    </div>
  );
}
