import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ChevronRight } from 'lucide-react';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { cn } from '@/lib/utils';

import { DateDisplay } from '../elements/date-display';
import { Link } from '../link/link';
import { H3 } from '../typography/h3';
import { Meta } from '../typography/meta';
import { Paragraph } from '../typography/paragraph';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  appearance?: 'grid' | 'list';
  description?: string;
  title?: string;
}

export function Feed({
  appearance = 'list',
  children,
  description,
  title,
  ...props
}: FeedProps) {
  const wrapperClasses = cn(
    title ? 'col-span-2' : 'not-prose',
    appearance === 'grid' && 'md:grid-cols-2',
    'grid gap-12 md:gap-16',
  );

  if (title) {
    return (
      <div className="not-prose grid gap-8 md:grid-cols-3" {...props}>
        <div className="col-span-2 md:col-span-1 md:border-l md:border-slate-300/25 md:px-8 dark:md:border-slate-500/25">
          <div className="grid gap-2 md:sticky md:top-23">
            <h2 className="font-medium text-teal-600 dark:text-teal-200/75">
              {title}
            </h2>
            {description && <p className="text-slate-500">{description}</p>}
          </div>
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

interface FeedItemProps
  extends Omit<ComponentPropsWithoutRef<'article'>, 'className'> {
  action?: string;
  children?: ReactNode;
  date?: Date | string;
  description?: ReactNode;
  link?: string;
  meta?: ReactNode;
  title: string;
  viewTransitionName?: string;
}

function FeedItem({
  action,
  children,
  description,
  link,
  title,
  viewTransitionName,
  ...rest
}: FeedItemProps) {
  const { date, meta, ...props } = {
    date: 'date' in rest && rest.date !== undefined ? rest.date : undefined,
    meta: 'meta' in rest && rest.meta !== undefined ? rest.meta : undefined,
    ...rest,
  };
  const articleClasses = cn(
    action ? 'gap-8' : 'gap-4',
    link && 'group relative',
    'grid',
  );
  const descriptionClasses = cn(link && 'relative z-10');
  const metaClasses = cn(
    'order-first',
    link && 'relative z-10',
    date !== undefined && 'text-slate-400 dark:text-slate-500',
  );
  const titleContent = link ? (
    <Link href={link}>
      <span className="absolute -inset-4 z-20 md:-inset-6" />
      <span className="relative z-10">{title}</span>
    </Link>
  ) : (
    title
  );
  const content = (
    <>
      <div className="grid">
        <H3>
          {viewTransitionName ? (
            <ViewTransition name={viewTransitionName}>
              {titleContent}
            </ViewTransition>
          ) : (
            titleContent
          )}
        </H3>
        {meta === undefined ? (
          date !== undefined && (
            <DateDisplay className={metaClasses} value={date} />
          )
        ) : (
          <Meta className={metaClasses}>{meta}</Meta>
        )}
      </div>

      <Paragraph
        asChild={typeof description !== 'string'}
        className={descriptionClasses}
      >
        {typeof description === 'string' ? (
          description
        ) : (
          <div>{description}</div>
        )}
      </Paragraph>
      {children}
    </>
  );

  return (
    <article className={articleClasses} {...props}>
      {action ? (
        <>
          <div className="grid gap-2">{content}</div>
          <p className="relative z-10 inline-flex items-center gap-0.5 font-medium text-teal-700 transition group-hover:text-teal-800 dark:text-teal-200/75 dark:group-hover:text-teal-200/90">
            {action}
            <ChevronRight
              aria-hidden
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </p>
        </>
      ) : (
        content
      )}
      {link && (
        <div className="absolute -inset-4 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 md:-inset-6 md:rounded-3xl dark:bg-slate-900/50" />
      )}
    </article>
  );
}

Feed.Item = FeedItem;
