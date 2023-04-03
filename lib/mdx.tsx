import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { InlineLink } from '~/components/ui/link/InlineLink';
import { H1 } from '~/components/ui/typography/H1';
import { H2 } from '~/components/ui/typography/H2';
import { H3 } from '~/components/ui/typography/H3';
import { H4 } from '~/components/ui/typography/H4';
import { Lead } from '~/components/ui/typography/Lead';

interface DivProps extends ComponentPropsWithoutRef<'div'> {
  'data-rehype-pretty-code-fragment'?: string;
  'data-rehype-pretty-code-title'?: string;
}

interface CodeProps extends ComponentPropsWithoutRef<'code'> {
  'data-language'?: string;
}

export const components: MDXComponents = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props) => <Image className="rounded-[1.75rem]" {...props} />,
  Lead,
  a: ({ href, ...props }) => (href ? <InlineLink href={href} {...props} /> : null),
  code: (props: CodeProps) => {
    // Handle inline code
    if (props['data-language'] === undefined) {
      return (
        <code
          className="inline-block rounded-lg border border-slate-200 bg-slate-50 px-1 before:content-none after:content-none"
          {...props}
        />
      );
    }

    return <code {...props} />;
  },
  div: ({ children, className, ...props }: DivProps) => {
    // Handle code block titles
    if (props['data-rehype-pretty-code-title'] !== undefined) {
      return (
        <div
          className="mt-[1.7142857em] rounded-t-[1.25rem] bg-slate-950/90 px-4 pt-1.5 sm:px-8 [&+pre]:mt-0 [&+pre]:rounded-t-none"
          {...props}
        >
          <span className="inline-flex items-center rounded-t-xl border-l border-t border-slate-700 bg-slate-800 px-3 py-1 font-mono text-[0.6875rem] font-semibold text-slate-400">
            {children}
          </span>
        </div>
      );
    }

    // Handle code block wrappers
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
    <pre className="relative block rounded-[1.75rem] px-0 py-6 selection:bg-white/10 [&>code]:grid" {...props} />
  ),
};
