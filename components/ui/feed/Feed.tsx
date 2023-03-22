import type { ComponentPropsWithoutRef } from 'react';

interface FeedProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  title?: string;
}

export function Feed({ children, title, ...props }: FeedProps) {
  if (title) {
    return (
      <div className="grid grid-cols-4" {...props}>
        <div className="border-l border-stone-100 px-8">
          <h2 className="sticky top-16 font-semibold text-emerald-700/90">{title}</h2>
        </div>
        <div className="col-span-3 grid gap-8 md:gap-12">{children}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:gap-12" {...props}>
      {children}
    </div>
  );
}
