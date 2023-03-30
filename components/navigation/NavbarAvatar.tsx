'use client';

import { Transition } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useContext } from 'react';
import { useIsActivePathname } from '~/hooks/useIsActivePathname';
import { Intersection } from '../intersection/Intersection';

type NavbarAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function NavbarAvatar({ children }: NavbarAvatarProps) {
  const { isInView } = useContext(Intersection);
  const isHome = useIsActivePathname('/');

  return (
    <Transition
      enter="transition"
      enterFrom="opacity-0 scale-90"
      enterTo="opacity-100"
      leave="transition"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 scale-90"
      show={!(isHome && isInView)}
    >
      {children}
    </Transition>
  );
}
