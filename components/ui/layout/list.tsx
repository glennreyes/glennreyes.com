import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef } from 'react';

interface ListProps extends Omit<ComponentPropsWithoutRef<'ul'>, 'className'> {
  asChild?: boolean;
}

export function List({ asChild, ...props }: ListProps) {
  const Component = asChild ? Slot : 'ul';

  return <Component className="grid gap-4" {...props} />;
}

type ListItemProps = ComponentPropsWithoutRef<'li'>;

function ListItem(props: ListItemProps) {
  return <li {...props} />;
}

List.Item = ListItem;
