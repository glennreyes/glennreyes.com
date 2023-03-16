import type { ComponentPropsWithoutRef } from 'react';

type NavbarProps = Omit<ComponentPropsWithoutRef<'nav'>, 'className'>;

export function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 bg-white/75 supports-[backdrop-filter]:backdrop-blur-md">
      <nav className="container mx-auto flex justify-end gap-2 py-4 md:justify-center md:gap-4" {...props} />
    </header>
  );
}
