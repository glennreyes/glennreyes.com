import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

import { DateDisplay } from '../elements/date-display';
import { Link } from '../link/link';
import { H3 } from '../typography/h3';

export interface CardProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  asChild?: boolean;
}

export function Card({ asChild, ...props }: CardProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      className="relative overflow-hidden rounded-[1.75rem] border border-slate-300/25 p-6 dark:border-slate-500/25"
      {...props}
    />
  );
}

interface CardBodyProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'title'> {
  title?: string;
}

function CardBody({ children, title, ...props }: CardBodyProps) {
  return (
    <div className="grid gap-4" {...props}>
      {title && (
        <p className="text-xs font-bold uppercase text-teal-700 dark:text-teal-200/75">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

Card.Body = CardBody;

type CardItemWithDateProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'className' | 'title'
> & {
  children?: ReactNode;
  date: Date | string;
  description: string;
  link?: string;
  meta?: undefined;
  title: ReactNode;
};

type CardItemWithMetaProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'className' | 'title'
> & {
  children?: ReactNode;
  date?: undefined;
  description?: string;
  link?: string;
  meta?: ReactNode;
  title: ReactNode;
};

type CardItemProps = CardItemWithDateProps | CardItemWithMetaProps;

function CardItem({
  children,
  description,
  link,
  title,
  ...rest
}: CardItemProps) {
  const itemClasses = clsx(link && 'group relative', 'flex gap-4');
  const descriptionClasses = clsx(
    link && 'relative z-10',
    'text-sm text-slate-500 dark:text-slate-400',
  );
  const metaClasses = clsx(
    link && 'relative z-10',
    'text-sm text-slate-400 dark:text-slate-500',
  );
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };

  return (
    <div className={itemClasses} {...props}>
      {children !== undefined && children !== null && (
        <div className="relative z-10">{children}</div>
      )}
      <div className="grid flex-1 items-center gap-1">
        {meta !== undefined && meta !== null ? (
          <div className={metaClasses}>{meta}</div>
        ) : (
          date !== undefined && (
            <DateDisplay className={metaClasses} value={date} />
          )
        )}
        {title !== undefined && (
          <H3 className="text-sm">
            {link ? (
              <Link href={link}>
                <span className="absolute -inset-x-6 -inset-y-2 z-20" />
                <span className="relative z-10">{title}</span>
              </Link>
            ) : (
              title
            )}
          </H3>
        )}
        {description && <p className={descriptionClasses}>{description}</p>}
        {link && (
          <div className="absolute -inset-x-6 -inset-y-2 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-900/50" />
        )}
      </div>
    </div>
  );
}

Card.Item = CardItem;
