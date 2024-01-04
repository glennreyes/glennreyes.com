import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx/components';
import { MDXRemote } from 'next-mdx-remote/rsc';

type MDXContentProps = Omit<MDXRemoteProps, 'components'>;

export const MDXContent = (props: MDXContentProps) => <MDXRemote components={components} {...props} />;
