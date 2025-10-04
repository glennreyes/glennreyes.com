'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { Link } from './link';

type TransitionLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function TransitionLink({
  children,
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const source = typeof href === 'object' ? (href.pathname ?? '/') : href;

  // Handle hash links and external links normally
  if (source.startsWith('#') || source.startsWith('http')) {
    return (
      <Link href={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  // Handle internal navigation with transitions
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow default behavior for cmd/ctrl + click, middle click, etc.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0 ||
      props.target === '_blank'
    ) {
      return;
    }

    event.preventDefault();

    if (onClick) {
      onClick(event);
    }

    startTransition(() => {
      router.push(source);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
