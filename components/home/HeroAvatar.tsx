'use client';

import { Transition } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useContext } from 'react';
import { useIsActivePathname } from '~/hooks/useIsActivePathname';
import { Intersection } from '../intersection/Intersection';

type HeroAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function HeroAvatar({ children }: HeroAvatarProps) {
  const { ref, isInView } = useContext(Intersection);
  const isHome = useIsActivePathname('/');

  return (
    <div className="w-40" ref={ref}>
      <Transition
        enter="transition duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100"
        leave="transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 scale-95"
        show={isHome && isInView}
      >
        {children}
      </Transition>
    </div>
  );
}
