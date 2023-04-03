import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from '../link/Link';

type IconButtonAppearance = 'primary' | 'secondary' | 'tertiary';

const appearances: Record<IconButtonAppearance, string> = {
  primary: 'border-slate-100 hover:border-slate-200 active:border-slate-300',
  secondary: 'border-transparent hover:border-slate-100 active:border-slate-200',
  tertiary: 'border-transparent hover:text-slate-600 active:text-slate-700',
};

type IconButtonSize = 6 | 7;

const sizes: Record<IconButtonSize, string> = {
  6: 'h-6 w-6',
  7: 'h-7 w-7',
};

interface IconButtonBaseProps {
  appearance?: IconButtonAppearance;
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  size?: IconButtonSize;
}

export interface IconButtonDefaultProps
  extends IconButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
  as?: 'button';
}

export interface IconButtonAsLinkProps extends IconButtonBaseProps, ComponentPropsWithoutRef<typeof Link> {
  as: 'link';
}

export type IconButtonProps = IconButtonAsLinkProps | IconButtonDefaultProps;

export function IconButton({ appearance = 'primary', className, icon: Icon, size = 6, ...props }: IconButtonProps) {
  const classes = twMerge(
    'rounded-full border p-2.5 text-slate-500 transition focus:text-slate-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 active:scale-95 active:text-slate-700 disabled:opacity-75',
    appearances[appearance],
    className,
  );
  const iconClasses = sizes[size];

  if (props.as === 'link') {
    const { as, ...rest } = props;
    const linkClasses = clsx(classes, 'inline-flex justify-center items-center');

    return (
      <Link className={linkClasses} {...rest}>
        <Icon aria-hidden className={iconClasses} />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <Icon aria-hidden className={iconClasses} />
    </button>
  );
}
