import type { ComponentPropsWithoutRef } from 'react';

type NavbarProps = Omit<ComponentPropsWithoutRef<'nav'>, 'className'>;

export function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 bg-white/75 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="p-4 md:px-8">
        <nav className="mx-auto flex max-w-5xl justify-end gap-2 md:justify-center md:gap-4" {...props} />
      </div>
    </header>
  );
}
