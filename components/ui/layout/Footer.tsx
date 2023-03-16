import type { ComponentPropsWithoutRef } from 'react';

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'className'>;

export function Footer({ children, ...props }: FooterProps) {
  return (
    <footer className="border-t border-stone-100" {...props}>
      <div className="container mx-auto p-4 text-center text-xs text-stone-400">{children}</div>
    </footer>
  );
}
