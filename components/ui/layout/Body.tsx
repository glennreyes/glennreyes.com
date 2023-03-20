import type { ComponentPropsWithoutRef } from 'react';

type BodyProps = Omit<ComponentPropsWithoutRef<'body'>, 'className'>;

export function Body(props: BodyProps) {
  return <body className="flex min-h-screen min-w-[320px] flex-col gap-12 antialiased" {...props} />;
}
