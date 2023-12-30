import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

type MDXRemoteContentProps = Omit<MDXRemoteProps, 'components'>;

export function MDXRemoteContent(props: MDXRemoteContentProps) {
  return <MDXRemote components={components} {...props} />;
}
