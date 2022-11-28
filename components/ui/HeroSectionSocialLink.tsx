import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface HeroSectionSocialLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

export function HeroSectionSocialLink(props: HeroSectionSocialLinkProps) {
  return <Link className="group" {...props} />;
}
