import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import type { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Page = defineDocumentType(() => ({
  computedFields: {
    path: {
      resolve: (doc) => doc._raw.flattenedPath.replace(/^pages\//, ''),
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    heading: { type: 'string' },
    lead: { type: 'string' },
    title: { required: true, type: 'string' },
  },
  filePathPattern: 'pages/**/*.mdx',
  name: 'Page',
}));

export const Post = defineDocumentType(() => ({
  computedFields: {
    readingTime: {
      resolve: (doc) => readingTime(doc.body.raw),
      type: 'json',
    },
    slug: {
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, ''),
      type: 'string',
    },
  },
  contentType: 'mdx',
  fields: {
    excerpt: { required: true, type: 'string' },
    lead: { type: 'string' },
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
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {},
        } satisfies Partial<RehypeAutolinkHeadingsOptions>,
      ],
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
        } satisfies Partial<RehypePrettyCodeOptions>,
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
});
