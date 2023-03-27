import type { ComponentPropsWithoutRef } from 'react';
import { Link } from './Link';

type ActionLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>;

export function ActionLink(props: ActionLinkProps) {
  return <Link className="font-semibold text-stone-400" {...props} />;
}
