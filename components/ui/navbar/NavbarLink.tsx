import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface NavbarLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function NavbarLink(props: NavbarLinkProps) {
  return <Link className="rounded-full px-3 py-2 text-sm" {...props} />;
}
