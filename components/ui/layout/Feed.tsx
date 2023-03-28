import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DateDisplay } from '../elements/DateDisplay';
import { Link } from '../elements/Link';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  appearance?: 'grid' | 'list';
  title?: string;
}

export function Feed({ appearance = 'list', children, title, ...props }: FeedProps) {
  const wrapperClasses = clsx(
    {
      'col-span-3': title,
      'grid-cols-2': appearance === 'grid',
    },
    'not-prose grid gap-12 md:gap-16',
  );

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

interface FeedItemProps extends Omit<ComponentPropsWithoutRef<'article'>, 'className'> {
  action?: string;
  children?: ReactNode;
  date?: Date | string;
  description?: ReactNode;
  link?: string;
  meta?: ReactNode;
  title: string;
}

function FeedItem({ action, children, description, link, title, ...rest }: FeedItemProps) {
  const articleClasses = clsx(action ? 'gap-6' : 'gap-2', link && 'group relative', 'grid');
  const descriptionClasses = clsx(link && 'relative z-10', 'text-stone-500');
  const metaClasses = clsx(link && 'relative z-10', 'text-stone-400');
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };
  const content = (
    <>
      {meta !== undefined ? (
        <div className={metaClasses}>{meta}</div>
      ) : (
        date !== undefined && <DateDisplay className={metaClasses} value={date} />
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
      {typeof description === 'string' ? (
        <p className={descriptionClasses}>{description}</p>
      ) : (
        <div className={descriptionClasses}>{description}</div>
      )}
      {children}
    </>
  );

  return (
    <article className={articleClasses} {...props}>
      {action ? (
        <>
          <div className="grid gap-2">{content}</div>
          <p className="relative z-10 inline-flex items-center gap-1 font-semibold text-stone-400">
            {action}
            <ChevronRightIcon aria-hidden className="h-5 w-5" />
          </p>
        </>
      ) : (
        content
      )}
      {link && (
        <div className="absolute -inset-4 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-[1.75rem] md:-inset-6" />
      )}
    </article>
  );
}

Feed.Item = FeedItem;
