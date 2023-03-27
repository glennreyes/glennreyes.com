import { ChevronRightIcon } from '@heroicons/react/20/solid';
import type { ComponentPropsWithoutRef } from 'react';
import { Link } from './Link';

type ActionLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>;

export function ActionLink({ children, ...props }: ActionLinkProps) {
  return (
    <Link className="inline-flex items-center gap-1 font-semibold text-stone-400" {...props}>
      {children}
      <ChevronRightIcon className="h-5 w-5" />
    </Link>
  );
}
