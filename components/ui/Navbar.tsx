import type { ComponentProps } from 'react';

type NavbarProps = ComponentProps<'nav'>;

export function Navbar(props: NavbarProps) {
  return <nav {...props} />;
}
