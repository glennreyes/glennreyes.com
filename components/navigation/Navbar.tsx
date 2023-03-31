import { SunIcon } from '@heroicons/react/24/solid';
import type { ComponentPropsWithoutRef } from 'react';
import { Avatar } from '../avatar/Avatar';
import { Container } from '../ui/layout/Container';
import { Link } from '../ui/link/Link';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarBorder } from './NavbarBorder';
import { NavbarLink } from './NavbarLink';

type NavbarProps = Omit<ComponentPropsWithoutRef<'nav'>, 'className'>;

export function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 supports-[backdrop-filter]:bg-white/25 supports-[backdrop-filter]:backdrop-blur-md">
      <Container className="flex items-center gap-2 md:gap-4">
        <div className="flex flex-1">
          <NavbarAvatar>
            <Link className="block flex-none rounded-full" href="/">
              <Avatar className="border border-slate-200" size={10} />
            </Link>
          </NavbarAvatar>
        </div>
        <nav className="flex flex-1 gap-2 py-4 md:justify-center md:gap-4" {...props} />
        <div className="flex flex-1 justify-end">
          <SunIcon aria-hidden className="h-6 w-6 text-slate-400" />
        </div>
      </Container>
      <NavbarBorder />
    </header>
  );
}

Navbar.Link = NavbarLink;
