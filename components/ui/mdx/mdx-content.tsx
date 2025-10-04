import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx/components';
import { mdxRemoteOptions } from '@/lib/mdx/read-mdx-file';

type MDXContentProps = Omit<MDXRemoteProps, 'components' | 'options'> & {
  components?: MDXRemoteProps['components'];
};

export function MDXContent({
  components: overrides,
  ...props
}: MDXContentProps) {
  return (
    <MDXRemote
      components={{ ...components, ...overrides }}
      options={mdxRemoteOptions}
      {...props}
    />
  );
}
