import type { ComponentProps } from 'react';

type SocialListProps = Omit<ComponentProps<'ul'>, 'className'>;

export function SocialList(props: SocialListProps) {
  return (
    <nav className="overflow-hidden">
      <ul className="-mx-2 flex gap-2 md:gap-6" {...props} />
    </nav>
  );
}

type SocialListItemProps = Omit<ComponentProps<'li'>, 'className'>;

function SocialListItem(props: SocialListItemProps) {
  return <li className="flex" {...props} />;
}

SocialList.Item = SocialListItem;
