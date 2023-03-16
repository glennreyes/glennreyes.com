import type { ComponentPropsWithoutRef, ComponentType } from 'react';

interface SocialIconProps extends Omit<ComponentPropsWithoutRef<'svg'>, 'className'> {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
}

export function SocialIcon({ icon: Icon, ...props }: SocialIconProps) {
  return <Icon className="h-8 w-8" {...props} />;
}
