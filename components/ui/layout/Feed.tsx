import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { DateDisplay } from '../elements/DateDisplay';
import { Link } from '../link/Link';
import { H3 } from '../typography/H3';
import { Meta } from '../typography/Meta';
import { Paragraph } from '../typography/Paragraph';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  appearance?: 'grid' | 'list';
  title?: string;
}

export function Feed({ appearance = 'list', children, title, ...props }: FeedProps) {
  const wrapperClasses = clsx(
    title ? 'col-span-3' : 'not-prose',
    appearance === 'grid' && 'md:grid-cols-2',
    'grid gap-12 md:gap-16',
  );

  if (title) {
    return (
      <div className="not-prose grid gap-8 md:grid-cols-4" {...props}>
        <div className="md:border-l md:border-slate-300/25 md:px-8 dark:md:border-slate-500/25">
          <h2 className="font-semibold text-teal-600 md:sticky md:top-20 dark:text-teal-200/75">{title}</h2>
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
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };
  const articleClasses = clsx(action ? 'gap-8' : 'gap-2', link && 'group relative', 'grid');
  const descriptionClasses = clsx(link && 'relative z-10');
  const metaClasses = clsx(
    link && 'relative z-10 order-first',
    date !== undefined && 'text-slate-400 dark:text-slate-500',
  );
  const content = (
    <>
      <H3>
        {link ? (
          <Link href={link}>
            <span className="absolute -inset-4 z-20 md:-inset-6" />
            <span className="relative z-10">{title}</span>
          </Link>
        ) : (
          title
        )}
      </H3>
      {meta !== undefined ? (
        <Meta className={metaClasses}>{meta}</Meta>
      ) : (
        date !== undefined && <DateDisplay className={metaClasses} value={date} />
      )}
      <Paragraph as={typeof description === 'string' ? undefined : 'div'} className={descriptionClasses}>
        {description}
      </Paragraph>
      {children}
    </>
  );

  return (
    <article className={articleClasses} {...props}>
      {action ? (
        <>
          <div className="grid gap-2">{content}</div>
          <p className="relative z-10 inline-flex items-center gap-0.5 font-semibold text-teal-700 transition group-hover:text-teal-800 dark:text-teal-200/75 dark:group-hover:text-teal-200/90">
            {action}
            <ChevronRightIcon aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </p>
        </>
      ) : (
        content
      )}
      {link && (
        <div className="absolute -inset-4 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 md:-inset-6 md:rounded-[1.75rem] dark:bg-slate-900/50" />
      )}
    </article>
  );
}

Feed.Item = FeedItem;
