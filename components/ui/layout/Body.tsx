import type { ComponentPropsWithoutRef } from 'react';

type BodyProps = Omit<ComponentPropsWithoutRef<'body'>, 'className'>;

export function Body(props: BodyProps) {
  return <body className="grid min-h-screen min-w-[320px] gap-12 antialiased" {...props} />;
}
