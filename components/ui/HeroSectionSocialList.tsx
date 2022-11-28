import type { ComponentProps } from 'react';

type HeroSectionSocialListProps = Omit<ComponentProps<'ul'>, 'className'>;

export function HeroSectionSocialList(props: HeroSectionSocialListProps) {
  return <ul className="flex gap-4 sm:gap-6 md:gap-8" {...props} />;
}

type HeroSectionSocialListItemProps = Omit<ComponentProps<'li'>, 'className'>;

function HeroSectionSocialListItem(props: HeroSectionSocialListItemProps) {
  return <li {...props} />;
}

HeroSectionSocialList.Item = HeroSectionSocialListItem;
