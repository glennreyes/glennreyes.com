import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx/components';

type MDXContentProps = Omit<MDXRemoteProps, 'components'>;

export function MDXContent(props: MDXContentProps) {
  return (
    <MDXRemote components={components} {...props} />
  );
}
