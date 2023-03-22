import clsx from 'clsx';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { DateDisplay } from '../elements/DateDisplay';

interface FeedCardProps extends Omit<ComponentPropsWithoutRef<'article'>, 'className'> {
  date: ComponentPropsWithoutRef<typeof DateDisplay>['value'];
  description: string;
  link?: string;
  title: string;
}

export function FeedCard({ children, date, description, link, title, ...props }: FeedCardProps) {
  const articleClasses = clsx(link && 'group relative', 'grid gap-3');
  const dateDisplayClasses = clsx(link && 'relative z-10', 'text-stone-400');
  const descriptionClasses = clsx(link && 'relative z-10', 'text-stone-500');

  return (
    <article className={articleClasses} {...props}>
      <DateDisplay className={dateDisplayClasses} value={date} />
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
        <div className="absolute -inset-4 scale-95 bg-stone-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl md:-inset-6" />
      )}
    </article>
  );
}
