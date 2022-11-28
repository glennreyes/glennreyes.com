import type { ComponentProps } from 'react';

type BodyProps = Omit<ComponentProps<'body'>, 'className'>;

export function Body(props: BodyProps) {
  return <body className="min-h-screen min-w-[320px] bg-orange-100 bg-cover text-base" {...props} />;
}
