import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

interface ListProps extends Omit<ComponentPropsWithoutRef<'ul'>, 'className'> {
  asChild?: boolean;
}

export const List = ({ asChild, ...props }: ListProps) => {
  const Component = asChild ? Slot : 'ul';

  return <Component className="grid gap-4" {...props} />;
};

type ListItemProps = ComponentPropsWithoutRef<'li'>;

const ListItem = (props: ListItemProps) => <li {...props} />;

List.Item = ListItem;
