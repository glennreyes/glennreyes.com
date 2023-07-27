import { compareDesc } from 'date-fns';
import type { Post } from 'contentlayer/generated';
import { allPosts as allGeneratedPosts } from 'contentlayer/generated';

export const allPosts = allGeneratedPosts
  .filter((post): post is Post & { publishedAt: string } => !!post.publishedAt)
  .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
