import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { components } from '@/lib/mdx/components';
import { mdxRemoteOptions } from '@/lib/mdx/read-mdx-file';

type MDXContentProps = Omit<MDXRemoteProps, 'components' | 'options'> & {
  components?: MDXRemoteProps['components'];
  options?: MDXRemoteProps['options'];
};

const cloneDefaultOptions = () => ({
  ...mdxRemoteOptions,
  mdxOptions: {
    ...mdxRemoteOptions.mdxOptions,
    rehypePlugins: [
      ...(mdxRemoteOptions.mdxOptions?.rehypePlugins ?? []),
    ],
    remarkPlugins: [
      ...(mdxRemoteOptions.mdxOptions?.remarkPlugins ?? []),
    ],
  },
});

export function MDXContent({ components: overrides, options, ...props }: MDXContentProps) {
  const mergedComponents = { ...components, ...overrides };
  const defaultOptions = cloneDefaultOptions();
  const mergedOptions = options
    ? {
        ...defaultOptions,
        ...options,
        mdxOptions: {
          ...defaultOptions?.mdxOptions,
          ...options?.mdxOptions,
          rehypePlugins:
            options?.mdxOptions?.rehypePlugins ?? defaultOptions?.mdxOptions?.rehypePlugins,
          remarkPlugins:
            options?.mdxOptions?.remarkPlugins ?? defaultOptions?.mdxOptions?.remarkPlugins,
        },
      }
    : defaultOptions;

  return (
    <MDXRemote
      components={mergedComponents}
      options={mergedOptions}
      {...props}
    />
  );
}
