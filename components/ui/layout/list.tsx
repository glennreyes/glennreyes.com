import type { ComponentPropsWithoutRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface ListProps extends Omit<ComponentPropsWithoutRef<'ul'>, 'className'> {
  asChild?: boolean;
  spacing?: 'default' | 'dense';
}

function List({ asChild, spacing = 'default', ...props }: ListProps) {
  const Component = asChild ? Slot : 'ul';

  return (
    <Component
      className={cn('grid', spacing === 'dense' ? 'gap-4' : 'gap-8')}
      {...props}
    />
  );
}

type ListItemProps = ComponentPropsWithoutRef<'li'>;

function ListItem(props: ListItemProps) {
  return <li {...props} />;
}

type ListComponent = typeof List & {
  Item: typeof ListItem;
};

const ListComponentWithItem: ListComponent = Object.assign(List, {
  Item: ListItem,
});

export { ListComponentWithItem as List };
