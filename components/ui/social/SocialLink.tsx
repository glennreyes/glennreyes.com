import type { LinkProps } from 'next/link';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Link } from '../link/Link';

interface SocialLinkProps extends Omit<LinkProps, 'className'> {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
}

export function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="rounded-full p-2" {...props}>
      <Icon aria-hidden className="h-8 w-8" />
    </Link>
  );
}
