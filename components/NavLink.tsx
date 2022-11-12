import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

export function NavLink(props: NavLinkProps) {
  return <Link {...props} />;
}
