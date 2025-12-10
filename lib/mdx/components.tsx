import type { MDXComponents } from 'mdx/types';
import type { ImageProps } from 'next/image';
import type { ComponentProps, ComponentPropsWithoutRef } from 'react';

import { FileText } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';
import { Tweet as TweetEmbed } from 'react-tweet';

import { CopyToClipboard } from '@/components/ui/elements/copy-to-clipboard';
import { Video } from '@/components/ui/elements/video';
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

type TweetComponentProps = ComponentProps<typeof TweetEmbed>;

function MDXImage({ alt, className, ...props }: ImageProps) {
  return (
    <Image alt={alt} className={cn('rounded-3xl', className)} {...props} />
  );
}

function MDXTweet(props: TweetComponentProps) {
  return (
    <Suspense
      fallback={
        <div className="not-prose text-sm text-gray-500">
          Loading tweet&hellip;
        </div>
      }
    >
      <TweetEmbed {...props} />
    </Suspense>
  );
}

function MDXAnchor({
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = '[.prose_&]:font-normal';

  if (typeof href === 'string' && href.startsWith('#')) {
    return <Link href={href} className={classes} {...props} />;
  }

  if (typeof href === 'string' && href.length > 0) {
    return <InlineLink href={href} className={classes} {...props} />;
  }

  return null;
}

function MDXCode(props: CodeProps) {
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
}

function hasTypeProperty(value: unknown): value is { type: unknown } {
  return typeof value === 'object' && value !== null && 'type' in value;
}

function MDXFigure({ children, className, raw, ...props }: FigureProps) {
  // Handle code block wrappers
  if (props['data-rehype-pretty-code-figure'] !== undefined) {
    // Check if figcaption exists in children
    const childrenArray = Array.isArray(children) ? children : [children];
    const hasFigcaption = childrenArray.some((child) => {
      if (child === null || child === undefined) {
        return false;
      }

      if (typeof child !== 'object') {
        return false;
      }

      if (!hasTypeProperty(child)) {
        return false;
      }

      return child.type === 'figcaption';
    });

    return (
      <figure
        className="group relative my-[1.7142857em] overflow-hidden rounded-3xl border border-slate-300/25 dark:border-slate-500/25 [&_pre]:my-0 [&+pre]:rounded-t-none"
        {...props}
      >
        {hasFigcaption ? (
          <div className="relative flex items-center justify-end gap-2 rounded-t-3xl bg-slate-900 px-4 py-1 text-slate-400 sm:px-6 dark:bg-slate-950 dark:text-slate-500">
            <div className="-me-2 flex-none">
              <CopyToClipboard value={raw ?? ''} />
            </div>
          </div>
        ) : null}
        {children}
        {!hasFigcaption ? (
          <div className="absolute top-4 right-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
            <CopyToClipboard value={raw ?? ''} />
          </div>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={className} {...props}>
      {children}
    </figure>
  );
}

function MDXFigcaption({ children, className, ...props }: FigcaptionProps) {
  return (
    <figcaption
      className="absolute inset-x-0 top-[0.9375rem] mr-16 max-w-full min-w-0 flex-1 [.prose_&]:my-0"
      {...props}
    >
      <div className="absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-l from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
      <div className="absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-r from-transparent to-slate-900 dark:from-transparent dark:to-slate-950" />
      <div className="overflow-x-auto">
        <div className="flex items-center gap-1.5 pl-4 text-xs text-slate-300/75 sm:pl-6 dark:text-slate-300/75">
          <FileText
            aria-hidden
            className="h-4 w-4 flex-none text-slate-600 dark:text-slate-600"
            strokeWidth={2}
          />
          {children}
        </div>
      </div>
    </figcaption>
  );
}

type H2Props = ComponentPropsWithoutRef<'h2'>;

function MDXH2(props: H2Props) {
  return <H2 className="not-prose my-4 scroll-mt-23" {...props} />;
}

type H3Props = ComponentPropsWithoutRef<'h3'>;

function MDXH3(props: H3Props) {
  return <H3 className="not-prose my-4 scroll-mt-23" {...props} />;
}

type H4Props = ComponentPropsWithoutRef<'h4'>;

function MDXH4(props: H4Props) {
  return <H4 className="not-prose my-4 scroll-mt-23" {...props} />;
}

type StrongProps = ComponentPropsWithoutRef<'strong'>;

function MDXStrong(props: StrongProps) {
  return <strong className="font-medium" {...props} />;
}

type PreProps = ComponentPropsWithoutRef<'pre'>;

function MDXPre({ ...props }: PreProps) {
  return (
    <pre
      className="relative block rounded-3xl px-0 py-6 selection:bg-white/10 dark:bg-black/75 [&>code]:grid"
      {...props}
    />
  );
}

export const components: MDXComponents = {
  Image: MDXImage,
  Lead,
  Video,
  Tweet: MDXTweet,
  a: MDXAnchor,
  code: MDXCode,
  figure: MDXFigure,
  figcaption: MDXFigcaption,
  h1: H1,
  h2: MDXH2,
  h3: MDXH3,
  h4: MDXH4,
  strong: MDXStrong,
  pre: MDXPre,
};
