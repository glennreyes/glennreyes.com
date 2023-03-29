import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { Link } from '~/components/ui/elements/Link';
import { H1 } from '~/components/ui/typography/H1';
import { H2 } from '~/components/ui/typography/H2';
import { H3 } from '~/components/ui/typography/H3';
import { H4 } from '~/components/ui/typography/H4';
import { Lead } from '~/components/ui/typography/Lead';

interface DivProps extends ComponentPropsWithoutRef<'div'> {
  'data-rehype-pretty-code-fragment'?: string;
  'data-rehype-pretty-code-title'?: string;
}

export const components: MDXComponents = {
  Image: (props) => (
    <figure className="-mx-4 sm:mx-0">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image className="sm:rounded-[1.75rem]" {...props} />
    </figure>
  ),
  Lead,
  a: ({ href, ...props }) =>
    href ? (
      <Link
        className="decoration-teal-200 decoration-2 underline-offset-4 transition hover:text-slate-600 hover:decoration-teal-300 focus-visible:text-slate-600 focus-visible:decoration-teal-300"
        href={href}
        {...props}
      />
    ) : null,
  div: ({ children, className, ...props }: DivProps) => {
    if (props['data-rehype-pretty-code-title'] !== undefined) {
      return (
        <div
          className="-mx-4 mt-[1.7142857em] border-b border-slate-700/25 bg-slate-950/90 px-4 py-1.5 sm:mx-0 sm:rounded-t-[1.25rem] sm:px-8 [&+pre]:mt-0 [&+pre]:rounded-t-none"
          {...props}
        >
          <span className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-700/25 px-3 py-1 font-mono text-[0.6875rem] font-semibold text-slate-400">
            {children}
          </span>
        </div>
      );
    }

    if (props['data-rehype-pretty-code-fragment'] !== undefined) {
      return (
        <div className="relative" {...props}>
          {children}
        </div>
      );
    }

    return <div {...props}>{children}</div>;
  },
  h1: H1,
  h2: (props) => <H2 className="not-prose scroll-mt-20" {...props} />,
  h3: (props) => <H3 className="not-prose scroll-mt-20" {...props} />,
  h4: (props) => <H4 className="not-prose scroll-mt-20" {...props} />,
  h5: () => null,
  h6: () => null,
  pre: (props) => (
    <pre
      className="relative -mx-4 block rounded-none px-0 py-6 selection:bg-white/10 sm:mx-0 sm:rounded-[1.75rem] [&>code]:grid"
      {...props}
    />
  ),
};
