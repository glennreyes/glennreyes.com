import type { ComponentPropsWithoutRef } from 'react';

import { cloneElement, isValidElement } from 'react';

import { cn } from '@/lib/utils';

interface ListProps extends Omit<ComponentPropsWithoutRef<'ul'>, 'className'> {
  asChild?: boolean;
  spacing?: 'default' | 'dense';
}

function List({ asChild, spacing = 'default', ...props }: ListProps) {
  const classes = cn('grid', spacing === 'dense' ? 'gap-4' : 'gap-8');

  if (!asChild) {
    return <ul className={classes} {...props} />;
  }

  const { children, ...rest } = props;

  if (
    !isValidElement<Record<string, unknown> & { className?: string }>(children)
  ) {
    return null;
  }

  return cloneElement(children, {
    ...rest,
    className: cn(classes, children.props.className),
  });
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
