// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var Page = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (doc) => doc._raw.flattenedPath,
      type: "string"
    }
  },
  fields: {
    title: { required: true, type: "string" }
  },
  filePathPattern: "*.mdx",
  name: "Page"
}));
var Post = defineDocumentType(() => ({
  computedFields: {
    slug: {
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, ""),
      type: "string"
    }
  },
  fields: {
    cover: {
      of: defineNestedType(() => ({
        fields: {
          photo: { type: "string" },
          title: {
            of: defineNestedType(() => ({
              fields: {
                author: { required: true, type: "string" },
                url: { required: true, type: "string" }
              },
              name: "CoverAuthor"
            })),
            type: "nested"
          }
        },
        name: "Cover"
      })),
      type: "nested"
    },
    description: { required: true, type: "string" },
    publishedAt: { type: "date" },
    title: { required: true, type: "string" }
  },
  filePathPattern: "posts/**/*.mdx",
  name: "Post"
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Post],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
});
export {
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CDFZDIR4.mjs.map
