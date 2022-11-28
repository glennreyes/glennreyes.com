import clsx from 'clsx';
import type { ComponentProps } from 'react';

interface NavbarProps extends Omit<ComponentProps<'nav'>, 'className'> {
  isScrollTop?: boolean;
}

export function Navbar({ children, isScrollTop = false, ...props }: NavbarProps) {
  const classes = clsx('fixed top-0 inset-x-0 transition duration-500', {
    'bg-orange-100/75 supports-[backdrop-filter]:backdrop-blur-md': !isScrollTop,
  });
  const borderClasses = clsx('h-px transition duration-500', isScrollTop ? 'opacity-0' : 'opacity-100', {
    'bg-gradient-to-r from-transparent via-yellow-50/50 to-transparent': !isScrollTop,
  });

  return (
    <header className={classes}>
      <div className="p-4 md:px-8">
        <nav className="mx-auto flex max-w-5xl justify-end gap-2 md:justify-center md:gap-4" {...props}>
          {children}
        </nav>
      </div>
      <div className={borderClasses} />
    </header>
  );
}
