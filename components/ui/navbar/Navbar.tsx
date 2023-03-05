import type { ComponentProps } from 'react';

type NavbarProps = Omit<ComponentProps<'nav'>, 'className'>;

export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <header className="sticky top-0 bg-white/75 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="p-4 md:px-8">
        <nav className="mx-auto flex max-w-5xl justify-end gap-2 md:justify-center md:gap-4" {...props}>
          {children}
        </nav>
      </div>
    </header>
  );
}
