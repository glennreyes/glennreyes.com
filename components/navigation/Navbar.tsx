import { SunIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import type { LinkProps } from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import photo from '~/assets/images/photo.jpg';
import { name } from '~/lib/constants';
import { Link } from '../ui/elements/Link';
import { Container } from '../ui/layout/Container';
import { NavbarBorder } from './NavbarBorder';

type NavbarProps = Omit<ComponentPropsWithoutRef<'nav'>, 'className'>;

export function Navbar(props: NavbarProps) {
  return (
    <header className="bg-white-50/95 supports-[backdrop-filter]:bg-white-50/50 sticky top-0 z-30 supports-[backdrop-filter]:backdrop-blur-md">
      <Container className="flex items-center gap-2 md:gap-4">
        <div className="flex flex-1">
          <Link className="flex-none rounded-full border border-stone-200" href="/">
            <Image alt={name} className="h-10 w-10 rounded-full" src={photo} />
          </Link>
        </div>
        <nav className="flex flex-1 gap-2 py-4 md:justify-center md:gap-4" {...props} />
        <div className="flex flex-1 justify-end">
          <SunIcon aria-hidden className="h-6 w-6 text-stone-400" />
        </div>
      </Container>
      <NavbarBorder />
    </header>
  );
}

interface NavbarLinkProps extends Omit<LinkProps, 'className'> {
  children: ReactNode;
}

function NavbarLink(props: NavbarLinkProps) {
  return <Link className="rounded-full px-3 py-2 text-sm" {...props} />;
}

Navbar.Link = NavbarLink;
