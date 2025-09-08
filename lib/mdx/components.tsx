import type { MDXComponents } from 'mdx/types';
import type { ImageProps } from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

import { DocumentIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { CopyToClipboard } from '@/components/ui/elements/copy-to-clipboard';
import { InlineLink } from '@/components/ui/link/inline-link';
import { Link } from '@/components/ui/link/link';
import { H1 } from '@/components/ui/typography/h1';
import { H2 } from '@/components/ui/typography/h2';
import { H3 } from '@/components/ui/typography/h3';
import { H4 } from '@/components/ui/typography/h4';
import { Lead } from '@/components/ui/typography/lead';
import { cn } from '@/lib/utils';

interface FigureProps extends ComponentPropsWithoutRef<'figure'> {
  'data-rehype-pretty-code-figure'?: string;
  raw?: string;
}

interface FigcaptionProps extends ComponentPropsWithoutRef<'figcaption'> {
  'data-language'?: string;
  'data-rehype-pretty-code-title'?: string;
}

interface CodeProps extends ComponentPropsWithoutRef<'code'> {
  'data-language'?: string;
}

export const components: MDXComponents = {
  Image: ({ alt, className, ...props }: ImageProps) => (
    <Image alt={alt} className={cn('rounded-3xl', className)} {...props} />
  ),
  Lead,
  a: ({ href, ...props }) => {
    const classes = '[.prose_&]:font-normal';

    if (href?.startsWith('#')) {
      return <Link href={href} className={classes} {...props} />;
    }

    if (href) {
      return <InlineLink href={href} className={classes} {...props} />;
    }

    return null;
  },
  code: (props: CodeProps) => {
    // Handle inline code
    if (props['data-language'] === undefined) {
      return (
        <code
          className="mx-0.5 rounded-md border border-slate-200 bg-slate-50 px-1 before:content-none after:content-none dark:border-slate-800 dark:bg-slate-900"
          {...props}
        />
      );
    }

    return <code {...props} />;
  },
  figure: ({ children, className, raw, ...props }: FigureProps) => {
    // Handle code block wrappers
    if (props['data-rehype-pretty-code-figure'] !== undefined) {
      return (
        <figure
          className="relative my-[1.7142857em] overflow-hidden rounded-3xl border border-slate-300/25 dark:border-slate-500/25 [&_pre]:my-0 [&+pre]:rounded-t-none"
          {...props}
        >
          <div className="relative flex items-center justify-end gap-2 rounded-t-3xl bg-slate-900 px-4 py-1 text-slate-400 sm:px-6 dark:bg-slate-950 dark:text-slate-500">
            <div className="-me-2 flex-none">
              <CopyToClipboard value={raw ?? ''} />
            </div>
          </div>
          {children}
        </figure>
      );
    }

    return (
      <figure className={className} {...props}>
        {children}
      </figure>
    );
  },
  figcaption: ({ children, className, ...props }: FigcaptionProps) => {
    return (
      <figcaption
        className="absolute inset-x-0 top-[0.9375rem] max-w-full min-w-0 flex-1 pr-12 [.prose_&]:m-0"
        {...props}
      >
        <div className="absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-l from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
        <div className="absolute inset-y-0 right-12 z-10 w-4 bg-gradient-to-r from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
        <div className="overflow-x-auto">
          <div className="flex items-center gap-1.5 pl-4 text-xs text-slate-300/75 sm:pl-6 dark:text-slate-300/75">
            <DocumentIcon
              aria-hidden
              className="h-4 w-4 flex-none text-slate-600 dark:text-slate-600"
            />
            {children}
          </div>
        </div>
      </figcaption>
    );
  },
  h1: H1,
  h2: (props) => <H2 className="not-prose my-4 scroll-mt-23" {...props} />,
  h3: (props) => <H3 className="not-prose my-4 scroll-mt-23" {...props} />,
  h4: (props) => <H4 className="not-prose my-4 scroll-mt-23" {...props} />,
  strong: (props) => {
    return <strong className="font-medium" {...props} />;
  },
  pre: ({ className: _className, style: _style, ...props }) => {
    return (
      <pre
        className="relative block rounded-3xl px-0 py-6 selection:bg-white/10 dark:bg-black/75 [&>code]:grid"
        {...props}
      />
    );
  },
};
