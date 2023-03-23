import type { ElementType, ComponentPropsWithoutRef } from 'react';

type ListProps<TElementType extends ElementType> = Omit<ComponentPropsWithoutRef<TElementType>, 'className'> & {
  as?: Extract<TElementType, 'ol' | 'ul'>;
};

export function List<TElementType extends ElementType>({ as, ...props }: ListProps<TElementType>) {
  const Component = as ?? 'ul';

  return <Component className="grid gap-6" {...props} />;
}

type ListItemProps = ComponentPropsWithoutRef<'li'>;

function ListItem(props: ListItemProps) {
  return <li {...props} />;
}

List.Item = ListItem;
