import clsx from 'clsx';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DateDisplay } from '../elements/DateDisplay';

type CardProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'>;

export function Card(props: CardProps) {
  return <div className="relative rounded-[1.75rem] border border-stone-100 p-6" {...props} />;
}

interface CardBodyProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  title?: string;
}

function CardBody({ children, title, ...props }: CardBodyProps) {
  return (
    <div className="grid gap-4" {...props}>
      {title && <h3 className="text-xs font-bold uppercase text-teal-700/90">{title}</h3>}
      {children}
    </div>
  );
}

Card.Body = CardBody;

type CardItemWithDateProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  children?: ReactNode;
  date: Date | string;
  description: string;
  link?: string;
  meta?: undefined;
  title: string;
};

type CardItemWithMetaProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
  children?: ReactNode;
  date?: undefined;
  description: string;
  link?: string;
  meta: ReactNode;
  title: string;
};

type CardItemProps = CardItemWithDateProps | CardItemWithMetaProps;

function CardItem({ children, description, link, title, ...rest }: CardItemProps) {
  const itemClasses = clsx(link && 'group relative', 'grid gap-1');
  const descriptionClasses = clsx(link && 'relative z-10', 'text-sm text-stone-500');
  const metaClasses = clsx(link && 'relative z-10', 'text-sm text-stone-400');
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };

  return (
    <div className={itemClasses} {...props}>
      {date === undefined ? (
        <div className={metaClasses}>{meta}</div>
      ) : (
        <DateDisplay className={metaClasses} value={date} />
      )}
      <h3 className="text-sm font-medium">
        {link ? (
          <Link href={link}>
            <span className="absolute -inset-y-2 -inset-x-6 z-20" />
            <span className="relative z-10">{title}</span>
          </Link>
        ) : (
          title
        )}
      </h3>
      {description && <p className={descriptionClasses}>{description}</p>}
      {children}
      {link && (
        <div className="absolute -inset-y-2 -inset-x-6 scale-95 bg-stone-50/50 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
      )}
    </div>
  );
}

Card.Item = CardItem;
