import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DateDisplay } from '../elements/DateDisplay';
import { Link } from '../elements/Link';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  title?: string;
}

export function Feed({ children, title, ...props }: FeedProps) {
  const wrapperClasses = 'grid gap-12 md:col-span-3 md:gap-16 lg:col-span-2';

  if (title) {
    return (
      <div className="grid gap-y-8 md:grid-cols-4" {...props}>
        <div className="md:border-l md:border-stone-100 md:px-8">
          <h2 className="font-semibold text-teal-700/90 md:sticky md:top-20">{title}</h2>
        </div>
        <div className={wrapperClasses}>{children}</div>
      </div>
    );
  }

  return (
    <div className={wrapperClasses} {...props}>
      {children}
    </div>
  );
}

type FeedItemWithDateProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'> & {
  children?: ReactNode;
  date: Date | string;
  description?: string;
  link?: string;
  meta?: undefined;
  title: string;
};

type FeedItemWithMetaProps = Omit<ComponentPropsWithoutRef<'article'>, 'className'> & {
  children?: ReactNode;
  date?: undefined;
  description?: string;
  link?: string;
  meta: ReactNode;
  title: string;
};

type FeedItemProps = FeedItemWithDateProps | FeedItemWithMetaProps;

function FeedItem({ children, description, link, title, ...rest }: FeedItemProps) {
  const articleClasses = clsx(link && 'group relative', 'grid gap-2');
  const descriptionClasses = clsx(link && 'relative z-10', 'text-stone-500');
  const metaClasses = clsx(link && 'relative z-10', 'text-stone-400');
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };

  return (
    <article className={articleClasses} {...props}>
      {date === undefined ? (
        <div className={metaClasses}>{meta}</div>
      ) : (
        <DateDisplay className={metaClasses} value={date} />
      )}
      <h3 className="text-lg font-semibold tracking-tight">
        {link ? (
          <Link href={link}>
            <span className="absolute -inset-4 z-20 md:-inset-6" />
            <span className="relative z-10">{title}</span>
          </Link>
        ) : (
          title
        )}
      </h3>
      {description && <p className={descriptionClasses}>{description}</p>}
      {children}
      {link && (
        <div className="absolute -inset-4 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-[1.75rem] md:-inset-6" />
      )}
    </article>
  );
}

Feed.Item = FeedItem;
