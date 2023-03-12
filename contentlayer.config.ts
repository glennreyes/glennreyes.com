import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';

export const Page = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (doc) => doc._raw.flattenedPath,
      type: 'string',
    },
  },
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
    remarkPlugins: [remarkGfm],
  },
});
