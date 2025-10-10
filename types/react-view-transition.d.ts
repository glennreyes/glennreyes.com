import type { ComponentType, ReactNode } from 'react';

declare module 'react' {
  interface ViewTransitionProps {
    children: ReactNode;
    name?: string;
  }

  export const unstable_ViewTransition: ComponentType<ViewTransitionProps>;
}
