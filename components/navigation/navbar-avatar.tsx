'use client';

import { Transition } from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import { useContext } from 'react';
import { Intersection } from '../intersection/intersection';
import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';

type NavbarAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function NavbarAvatar({ children }: NavbarAvatarProps) {
  const { isInView } = useContext(Intersection);
  const isHome = useIsActivePathname('/');

  if (!isHome) {
    return <>{children}</>;
  }

  return (
    <Transition
      className="flex flex-none"
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95 translate-y-1/4"
      enterTo="opacity-100"
      leave="duration-150 ease-in"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 scale-95 translate-y-1/4"
      show={!isInView}
    >
      {children}
    </Transition>
  );
}