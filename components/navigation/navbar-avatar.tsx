'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';
import { Transition } from '@headlessui/react';
import { useContext } from 'react';

import { Intersection } from '../intersection/intersection';

type NavbarAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export const NavbarAvatar = ({ children }: NavbarAvatarProps) => {
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
};
