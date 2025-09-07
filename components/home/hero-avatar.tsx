'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { Transition } from '@headlessui/react';

import { useIntersection } from '@/lib/hooks/use-intersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export const HeroAvatar = ({ children }: HeroAvatarProps) => {
  const { isInView, ref } = useIntersection();

  return (
    <div className="h-40 w-40" ref={ref}>
      <Transition
        as="div"
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
};
