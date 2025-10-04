'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useContext } from 'react';

import { useIsActivePathname } from '@/lib/hooks/use-is-active-pathname';

import { Intersection } from '../intersection/intersection';

type NavbarAvatarProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function NavbarAvatar({ children }: NavbarAvatarProps) {
  const { isInView } = useContext(Intersection);
  const isHome = useIsActivePathname('/');

  if (!isHome) {
    return <>{children}</>;
  }

  return !isInView ? <div className="flex flex-none">{children}</div> : null;
}
