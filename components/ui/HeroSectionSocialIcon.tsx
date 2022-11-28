import type { ComponentProps, ComponentType } from 'react';

interface HeroSectionSocialIconProps extends Omit<ComponentProps<'svg'>, 'className'> {
  icon: ComponentType<ComponentProps<'svg'>>;
}

export function HeroSectionSocialIcon({ icon: Icon, ...props }: HeroSectionSocialIconProps) {
  return (
    <Icon
      className="h-8 w-8 fill-zinc-600 transition duration-300 ease-in-out group-hover:fill-zinc-800 md:h-12 md:w-12"
      {...props}
    />
  );
}
