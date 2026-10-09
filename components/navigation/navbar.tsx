import type { ComponentPropsWithoutRef } from 'react';
import { SkipNavigationLink } from '@/components/ui/elements/skip-navigation-link';
import { Container } from '@/components/ui/layout/container';
import { Link } from '@/components/ui/link/link';
type NavbarProps = Omit<ComponentPropsWithoutRef<'header'>, 'className'>;
export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <header
      className="bg-background/95 sticky top-0 z-30 backdrop-blur-xl"
      {...props}
    >
      <Container className="flex items-center justify-between gap-4 py-5">
        <SkipNavigationLink />
        <Link
          aria-label="Glenn Reyes, home"
          className="inline-flex min-h-11 items-center gap-3 rounded-md"
          href="/"
        >
          Glenn Reyes
        </Link>
        {children}
      </Container>
    </header>
  );
}
