import type { ComponentPropsWithoutRef } from 'react';

import { Avatar } from '../avatar/avatar';
import { SkipNavigationLink } from '../ui/elements/skip-navigation-link';
import { Container } from '../ui/layout/container';
import { Link } from '../ui/link/link';
import { NavbarAvatar } from './navbar-avatar';
import { NavbarBorder } from './navbar-border';
import { ThemeSelect } from './theme-select';

type NavbarProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;

export const Navbar = ({ children, ...props }: NavbarProps) => <header className="sticky top-0 z-30" {...props}>
      <div className="absolute inset-0 bg-white/95 supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:backdrop-blur-lg dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/50" />
      <NavbarBorder />
      <Container className="relative flex gap-2 py-1.5 md:gap-4 md:py-3">
        <div className="flex flex-1 shrink-0 items-center">
          <SkipNavigationLink />
          <div className="h-11 w-11">
            <NavbarAvatar>
              <Link
                className="block rounded-full focus-visible:ring-offset-2"
                href="/"
              >
                <Avatar size={11} />
              </Link>
            </NavbarAvatar>
          </div>
        </div>
        {children}
        <div className="hidden flex-1 items-center justify-end md:grid">
          <ThemeSelect />
        </div>
      </Container>
    </header>;
