import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface SocialLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function SocialLink(props: SocialLinkProps) {
  return <Link className="rounded-full p-2" {...props} />;
}
