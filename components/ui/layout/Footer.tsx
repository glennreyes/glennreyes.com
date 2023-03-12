import type { ComponentPropsWithoutRef } from 'react';

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'className'>;

export function Footer({ children, ...props }: FooterProps) {
  return (
    <footer className="border-t border-zinc-100" {...props}>
      <div className="container mx-auto px-4 py-8 text-zinc-500 md:px-8 md:py-16">{children}</div>
    </footer>
  );
}
