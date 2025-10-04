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
  const [isPending, startTransition] = useTransition();
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow default behavior for cmd/ctrl + click, middle click, etc.
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.button !== 0 ||
      props.target === '_blank'
    ) {
      return;
    }

    e.preventDefault();

    if (onClick) {
      onClick(e);
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
