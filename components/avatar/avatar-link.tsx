'use client';

import type { ComponentPropsWithoutRef, MouseEvent } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import {
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from 'react';

import { AVATAR_VIEW_TRANSITION_NAME } from './avatar';

type AvatarLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export function AvatarLink({
  children,
  href,
  onClick,
  replace,
  scroll,
  ...props
}: AvatarLinkProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (onClick) {
      onClick(event);
    }

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    const destination = event.currentTarget.getAttribute('href');

    if (!destination) {
      return;
    }

    event.preventDefault();

    const navigationOptions = scroll === false ? { scroll: false } : undefined;

    startTransition(() => {
      if (replace) {
        router.replace(destination, navigationOptions);

        return;
      }

      router.push(destination, navigationOptions);
    });
  }

  return (
    <NextLink
      href={href}
      onClick={handleClick}
      replace={replace}
      scroll={scroll}
      {...props}
    >
      <ViewTransition name={AVATAR_VIEW_TRANSITION_NAME}>
        {children}
      </ViewTransition>
    </NextLink>
  );
}
