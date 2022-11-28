import type { ComponentProps } from 'react';

type HeroSectionSocialListProps = Omit<ComponentProps<'ul'>, 'className'>;

export function HeroSectionSocialList(props: HeroSectionSocialListProps) {
  return (
    <nav className="overflow-hidden">
      <ul className="-mx-3 flex gap-2 md:gap-6" {...props} />
    </nav>
  );
}

type HeroSectionSocialListItemProps = Omit<ComponentProps<'li'>, 'className'>;

function HeroSectionSocialListItem(props: HeroSectionSocialListItemProps) {
  return <li className="flex" {...props} />;
}

HeroSectionSocialList.Item = HeroSectionSocialListItem;
