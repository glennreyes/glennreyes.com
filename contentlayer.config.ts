import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import type { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Page = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (doc) => doc._raw.flattenedPath,
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    title: { required: true, type: 'string' },
  },
  filePathPattern: '*.mdx',
  name: 'Page',
}));

export const Post = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, ''),
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    cover: {
      of: defineNestedType(() => ({
        fields: {
          photo: { type: 'string' },
          title: {
            of: defineNestedType(() => ({
              fields: {
                author: { required: true, type: 'string' },
                url: { required: true, type: 'string' },
              },
              name: 'CoverAuthor',
            })),
            type: 'nested',
          },
        },
        name: 'Cover',
      })),
      type: 'nested',
    },
    description: { required: true, type: 'string' },
    publishedAt: { type: 'date' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: 'posts/**/*.mdx',
  name: 'Post',
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { properties: {} } as Partial<RehypeAutolinkHeadingsOptions>],
      [
        rehypePrettyCode,
        {
          onVisitHighlightedLine(node) {
            // Each line node by default has `class="line"`.
            node.properties.className.push('highlighted');
          },

          onVisitHighlightedWord(node) {
            // Each word node has no className by default.
            node.properties.className = ['word'];
          },
          // Callback hooks to add custom logic to nodes when visiting
          // them.
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          theme: 'nord',
        } as Partial<RehypePrettyCodeOptions>,
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
});
