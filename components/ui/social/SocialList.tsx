import type { ComponentPropsWithoutRef } from 'react';

type SocialListProps = Omit<ComponentPropsWithoutRef<'ul'>, 'className'>;

export function SocialList(props: SocialListProps) {
  return (
    <nav>
      <ul className="-mx-2 flex gap-2" {...props} />
    </nav>
  );
}

type SocialListItemProps = Omit<ComponentPropsWithoutRef<'li'>, 'className'>;

function SocialListItem(props: SocialListItemProps) {
  return <li className="flex" {...props} />;
}

SocialList.Item = SocialListItem;
