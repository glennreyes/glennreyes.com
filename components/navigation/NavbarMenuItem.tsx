import type { ComponentPropsWithoutRef } from 'react';

type NavbarMenuItemProps = Omit<ComponentPropsWithoutRef<'li'>, 'className'>;

export function NavbarMenuItem(props: NavbarMenuItemProps) {
  return <li {...props} />;
}
