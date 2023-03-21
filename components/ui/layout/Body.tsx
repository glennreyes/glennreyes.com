import type { ComponentPropsWithoutRef } from 'react';

type BodyProps = Omit<ComponentPropsWithoutRef<'body'>, 'className'>;

export function Body(props: BodyProps) {
  return <body className="min-h-screen min-w-[320px] space-y-16 antialiased lg:space-y-24" {...props} />;
}
