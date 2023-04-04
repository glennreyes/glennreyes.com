import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { classes } from './lib/rehype';

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
    meta: { type: 'string' },
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
      [rehypeSlug, {} satisfies Parameters<typeof rehypeSlug>[0]],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: { className: [classes.autoLink] },
        } satisfies Parameters<typeof rehypeAutolinkHeadings>[0],
      ],
      [
        rehypePrettyCode,
        {
          onVisitHighlightedLine(node) {
            // Each line node by default has `class="line"`.
            node.properties.className.push(classes.lineHighlighted);
          },
          // Callback hooks to add custom logic to nodes when visiting
          // them.
          onVisitLine(node) {
            node.properties.className = [classes.line];

            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          theme: 'nord',
        } satisfies Parameters<typeof rehypePrettyCode>[0],
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
});
