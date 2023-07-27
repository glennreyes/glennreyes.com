import { DocumentIcon } from '@heroicons/react/24/outline';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';
import { CopyToClipboard } from '@/components/ui/elements/CopyToClipboard';
import { InlineLink } from '@/components/ui/link/InlineLink';
import { Link } from '@/components/ui/link/Link';
import { H1 } from '@/components/ui/typography/H1';
import { H2 } from '@/components/ui/typography/H2';
import { H3 } from '@/components/ui/typography/H3';
import { H4 } from '@/components/ui/typography/H4';
import { Lead } from '@/components/ui/typography/Lead';

interface DivProps extends ComponentPropsWithoutRef<'div'> {
  'data-language'?: string;
  'data-rehype-pretty-code-fragment'?: string;
  'data-rehype-pretty-code-title'?: string;
  raw?: string;
}

interface CodeProps extends ComponentPropsWithoutRef<'code'> {
  'data-language'?: string;
}

export const components: MDXComponents = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props) => <Image className="rounded-[1.75rem]" {...props} />,
  Lead,
  a: ({ href, ...props }) =>
    href?.startsWith('#') ? <Link href={href} {...props} /> : href ? <InlineLink href={href} {...props} /> : null,
  code: (props: CodeProps) => {
    // Handle inline code
    if (props['data-language'] === undefined) {
      return (
        <code
          className="rounded-lg border border-slate-200 bg-slate-50 px-1.5 py-0.5 before:content-none after:content-none dark:border-slate-800 dark:bg-slate-900"
          {...props}
        />
      );
    }

    return <code {...props} />;
  },
  div: ({ children, className, raw, ...props }: DivProps) => {
    // Handle code block titles
    const language = props['data-language'];

    if (props['data-rehype-pretty-code-title'] !== undefined || language !== undefined) {
      return (
        <div className="absolute inset-x-0 top-[0.9375rem] min-w-0 max-w-full flex-1 pr-12">
          <div className="absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-l from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
          <div className="absolute inset-y-0 right-12 z-10 w-4 bg-gradient-to-r from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
          <div className="overflow-x-auto">
            <div className="flex items-center gap-1.5 pl-4 text-xs text-slate-300/75 dark:text-slate-300/75 sm:pl-6">
              <DocumentIcon aria-hidden className="h-4 w-4 flex-none text-slate-600 dark:text-slate-600" />
              {children}
            </div>
          </div>
        </div>
      );
    }

    // Handle code block wrappers
    if (props['data-rehype-pretty-code-fragment'] !== undefined) {
      return (
        <div
          className="relative my-[1.7142857em] overflow-hidden rounded-[1.75rem] border border-slate-300/25 dark:border-slate-500/25 [&+pre]:rounded-t-none [&_pre]:my-0"
          {...props}
        >
          <div className="relative flex items-center justify-end gap-2 rounded-t-[1.75rem] bg-slate-900 px-4 py-1 text-xs text-slate-400 dark:bg-slate-950 dark:text-slate-500 sm:px-6">
            {raw && (
              <div className="-mr-2 flex-none">
                <CopyToClipboard value={raw} />
              </div>
            )}
          </div>
          {children}
        </div>
      );
    }

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  },
  h1: H1,
  h2: (props) => <H2 className="not-prose scroll-mt-20" {...props} />,
  h3: (props) => <H3 className="not-prose scroll-mt-20" {...props} />,
  h4: (props) => <H4 className="not-prose scroll-mt-20" {...props} />,
  h5: () => null,
  h6: () => null,
  pre: (props) => (
    <pre
      className="relative block rounded-[1.75rem] rounded-t-none px-0 py-6 selection:bg-white/10 dark:bg-black/75 [&>code]:grid"
      {...props}
    />
  ),
};
