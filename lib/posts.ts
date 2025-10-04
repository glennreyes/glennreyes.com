import { compareDesc, isAfter } from 'date-fns';

import { getMDXFiles } from './mdx/get-mdx-files';
import { readMDXFile } from './mdx/read-mdx-file';

export interface PostFrontmatter {
  description: string;
  lead?: string;
  publishedAt: string;
  title: string;
}

export const getAllPosts = async () => {
  const allPosts = await Promise.all(
    getMDXFiles('content/posts').map(async (file) => {
      const { content, frontmatter } = await readMDXFile<PostFrontmatter>(
        `content/posts/${file}`,
      );

      return {
        content,
        frontmatter,
        slug: file.replace(/\.mdx?$/, ''),
      };
    }),
  );

  return allPosts
    .filter((post) => !!post.frontmatter.publishedAt)
    .sort((a, b) =>
      compareDesc(
        new Date(a.frontmatter.publishedAt),
        new Date(b.frontmatter.publishedAt),
      ),
    );
};

export const getAllPublishedPosts = async () => {
  const allPosts = await getAllPosts();
  const today = new Date();

  return allPosts.filter((post) => {
    const publishedDate = new Date(post.frontmatter.publishedAt);

    return !isAfter(publishedDate, today);
  });
};
