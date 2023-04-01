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
      <Container className="flex gap-2 py-3 md:gap-4">
        <div className="flex flex-1 shrink-0 items-center">
          <div className="h-10 w-10">
            <NavbarAvatar>
              <Link className="block rounded-full focus-visible:ring-offset-2" href="/">
                <Avatar className="border border-slate-200" size={10} />
              </Link>
            </NavbarAvatar>
          </div>
        </div>
        {children}
        <div className="hidden flex-1 items-center justify-end md:grid">
          <ThemeSwitch />
        </div>
      </Container>
      <NavbarBorder />
    </header>
  );
}
