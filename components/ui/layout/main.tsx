import type { ComponentPropsWithoutRef } from 'react';
import { ViewTransition } from 'react';

type MainProps = Omit<ComponentPropsWithoutRef<'main'>, 'className'>;

export function Main({ children, ...props }: MainProps) {
  return (
    <main
      className="space-y-20 py-8 lg:py-12"
      id="main"
      tabIndex={-1}
      {...props}
    >
      <ViewTransition name="page">{children}</ViewTransition>
    </main>
  );
}
