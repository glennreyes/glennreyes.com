import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

interface ListProps extends Omit<ComponentPropsWithoutRef<'ul'>, 'className'> {
  asChild?: boolean;
  spacing?: 'default' | 'dense';
}

export const List = ({ asChild, spacing = 'default', ...props }: ListProps) => {
  const Component = asChild ? Slot : 'ul';

  return (
    <Component
      className={clsx('grid', spacing === 'dense' ? 'gap-4' : 'gap-8')}
      {...props}
    />
  );
};

type ListItemProps = ComponentPropsWithoutRef<'li'>;

const ListItem = (props: ListItemProps) => <li {...props} />;

List.Item = ListItem;
