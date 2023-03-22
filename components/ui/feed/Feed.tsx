import type { ComponentPropsWithoutRef } from 'react';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  title?: string;
}

export function Feed({ children, title, ...props }: FeedProps) {
  if (title) {
    return (
      <div className="grid gap-y-8 md:grid-cols-4" {...props}>
        <div className="md:border-l md:border-stone-100 md:px-8">
          <h2 className="font-semibold text-emerald-700/90 md:sticky md:top-20">{title}</h2>
        </div>
        <div className="grid gap-8 md:col-span-3 md:gap-12 lg:col-span-2">{children}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:gap-12" {...props}>
      {children}
    </div>
  );
}
