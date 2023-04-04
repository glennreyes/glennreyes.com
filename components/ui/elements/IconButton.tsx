import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { twMerge } from 'tailwind-merge';
import { Link } from '../link/Link';

type IconButtonAppearance = 'primary' | 'secondary' | 'tertiary';

const appearances: Record<IconButtonAppearance, string> = {
  primary:
    'border-slate-300/25 dark:border-slate-600/25 dark:bg-slate-900/75 hover:border-slate-200 dark:hover:border-slate-700 active:border-slate-300 dark:active:border-slate-700',
  secondary:
    'border-transparent hover:border-slate-300/25 dark:hover:border-slate-900 active:border-slate-200 dark:active:border-slate-800',
  tertiary:
    'border-transparent hover:text-slate-600 dark:hover:text-slate-300 active:text-slate-700 dark:active:text-slate-200',
};

type IconButtonSize = 5 | 6 | 7;

const sizes: Record<IconButtonSize, string> = {
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  7: 'h-7 w-7',
};

const paddings: Record<IconButtonSize, string> = {
  5: 'p-2',
  6: 'p-2.5',
  7: 'p-2.5',
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
    'border rounded-full bg-white/25 dark:bg-slate-950/25 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300 dark:active:text-slate-200 transition focus:text-slate-600 focus:outline-none active:scale-95 active:text-slate-700 disabled:opacity-75',
    paddings[size],
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

  const buttonClasses = clsx(
    classes,
    'focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950',
  );

  return (
    <button className={buttonClasses} {...props}>
      <Icon aria-hidden className={iconClasses} />
    </button>
  );
}
