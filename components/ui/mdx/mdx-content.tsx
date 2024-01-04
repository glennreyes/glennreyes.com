import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx/components';
import { MDXRemote } from 'next-mdx-remote/rsc';

type MDXContentProps = Omit<MDXRemoteProps, 'components'>;

export function MDXContent(props: MDXContentProps) {
  return <MDXRemote components={components} {...props} />;
}
