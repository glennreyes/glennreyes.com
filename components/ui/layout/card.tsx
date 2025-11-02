import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import { DateDisplay } from '../elements/date-display';
import { Link } from '../link/link';
import { H3 } from '../typography/h3';

interface CardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  asChild?: boolean;
}

function Card({ asChild, ...props }: CardProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      className="relative overflow-hidden rounded-3xl border border-gray-300/25 p-6 dark:border-gray-500/25"
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
      {title !== undefined && title !== null && title !== '' ? (
        <p className="font-medium text-teal-700 dark:text-teal-200/75">
          {title}
        </p>
      ) : null}
      {children}
    </div>
  );
}

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
  const itemClasses = cn(link && 'group relative', 'flex gap-4');
  const descriptionClasses = cn(
    link && 'relative z-10',
    'text-gray-500 dark:text-gray-400',
  );
  const metaClasses = cn(
    link && 'relative z-10',
    'order-first text-gray-400 dark:text-gray-500',
  );
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };

  return (
    <div className={itemClasses} {...props}>
      {children !== undefined && children !== null ? (
        <div className="relative z-10">{children}</div>
      ) : null}
      <div className="grid flex-1 items-center gap-4">
        <div className="grid">
          {title !== undefined && title !== null ? (
            <H3>
              {link !== undefined && link !== null && link !== '' ? (
                <Link href={link}>
                  <span className="absolute -inset-x-6 -inset-y-2 z-20" />
                  <span className="relative z-10">{title}</span>
                </Link>
              ) : (
                title
              )}
            </H3>
          ) : null}
          {meta !== undefined && meta !== null ? (
            <div className={metaClasses}>{meta}</div>
          ) : date !== undefined && date !== null ? (
            <DateDisplay className={metaClasses} value={date} />
          ) : null}
        </div>
        {description !== undefined &&
        description !== null &&
        description !== '' ? (
          <p className={descriptionClasses}>{description}</p>
        ) : null}
        {link !== undefined && link !== null && link !== '' ? (
          <div className="absolute -inset-x-6 -inset-y-2 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-900/50" />
        ) : null}
      </div>
    </div>
  );
}

type CardComponent = typeof Card & {
  Body: typeof CardBody;
  Item: typeof CardItem;
};

const CardComponentWithSections: CardComponent = Object.assign(Card, {
  Body: CardBody,
  Item: CardItem,
});

export { CardComponentWithSections as Card };
