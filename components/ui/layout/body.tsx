import type { ComponentPropsWithoutRef } from 'react';

type BodyProps = Omit<ComponentPropsWithoutRef<'body'>, 'className'>;

export const Body = (props: BodyProps) => <body
      className="min-h-screen min-w-[320px] bg-white antialiased selection:bg-teal-100/75 dark:bg-slate-950 dark:selection:bg-teal-800/75"
      {...props}
    />;
