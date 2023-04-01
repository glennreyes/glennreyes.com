import type { ComponentPropsWithoutRef } from 'react';
import { Avatar } from '../avatar/Avatar';
import { Container } from '../ui/layout/Container';
import { Link } from '../ui/link/Link';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarBorder } from './NavbarBorder';
import { ThemeSwitch } from './ThemeSwitch';

type NavbarProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;

export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <header
      className="sticky top-0 z-30 bg-white/95 supports-[backdrop-filter]:bg-white/25 supports-[backdrop-filter]:backdrop-blur-md"
      {...props}
    >
      <Container className="flex items-center gap-2 py-2 md:grid md:grid-cols-3 md:gap-4 md:py-4">
        <div className="h-10 w-10 flex-none">
          <NavbarAvatar>
            <Link className="block rounded-full" href="/">
              <Avatar className="border border-slate-200" size={10} />
            </Link>
          </NavbarAvatar>
        </div>
        <div className="flex flex-1 justify-end gap-2 md:col-span-2 md:gap-4">
          {children}
          <div className="flex items-center justify-end gap-4 md:flex-1">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
      <NavbarBorder />
    </header>
  );
}
