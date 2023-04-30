import { components } from '@/lib/mdx';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote/rsc';

type MDXRemoteContentProps = Omit<MDXRemoteProps, 'components'>;

export function MDXRemoteContent(props: MDXRemoteContentProps) {
  // @ts-expect-error Server Components
  return <MDXRemote components={components} {...props} />;
}
