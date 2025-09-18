import type { ComponentPropsWithoutRef } from 'react';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { Link } from './link';

type ActionLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>;

export function ActionLink({ children, ...props }: ActionLinkProps) {
  return (
  <Link
    className="group inline-flex items-center gap-0.5 font-medium text-teal-700 transition hover:text-teal-800 focus-visible:transition-none dark:text-teal-200/75 dark:hover:text-teal-200/90"
    {...props}
  >
    {children}
    <ChevronRightIcon
      aria-hidden
      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
    />
  </Link>
  );
}
