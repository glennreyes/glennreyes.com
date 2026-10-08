import React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

const getCurrentTimestampMock = vi.fn(() => new Date('2024-01-01').getTime());

vi.mock('./time', () => ({
  getCurrentTimestamp: getCurrentTimestampMock,
}));

vi.mock('content-collections', () => ({
  allPosts: [
    {
      body: 'Test content 1',
      description: 'Test description 1',
      publishedAt: '2023-01-01',
      slug: 'test-post-1',
      title: 'Test Post 1',
    },
    {
      body: 'Test content 2',
      description: 'Test description 2',
      publishedAt: '2023-01-02',
      slug: 'test-post-2',
      title: 'Test Post 2',
    },
    {
      body: 'Unpublished draft content',
      description: 'Draft description',
      draft: true,
      publishedAt: '2023-01-03',
      slug: 'draft-post',
      title: 'Draft Post',
    },
    {
      body: 'Future content',
      description: 'Future description',
      publishedAt: '2030-01-01',
      slug: 'future-post',
      title: 'Future Post',
    },
  ],
}));

vi.mock('next-mdx-remote/rsc', () => ({
  compileMDX: vi.fn(({ source }: { source: string }) =>
    Promise.resolve({
      content: React.createElement('div', null, source),
      frontmatter: {},
    }),
  ),
}));

const { getAllPublishedPosts, getPostBySlug } = await import('./posts');

describe('posts', () => {
  beforeEach(() => {
    getCurrentTimestampMock.mockResolvedValue(new Date('2024-01-01').getTime());
  });

  describe('getAllPublishedPosts', () => {
    it('should return all posts sorted by publishedAt desc', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2031-01-01').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
    });
  });

  describe('getAllPublishedPosts', () => {
    it('should filter out future posts', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2023-06-01').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
      expect(
        posts.find((p) => p.frontmatter.title === 'Future Post'),
      ).toBeUndefined();
      expect(posts.find((p) => p.slug === 'draft-post')).toBeUndefined();
    });

    it('should include posts published today', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2023-01-02').getTime(),
      );
      const posts = await getAllPublishedPosts();

      expect(posts).toHaveLength(2);
      const titles = posts.map((p) => p.frontmatter.title);

      expect(titles).toEqual(['Test Post 2', 'Test Post 1']);
    });
  });

  describe('getPostBySlug', () => {
    it('keeps drafts off the public route while allowing preview access', async () => {
      expect(await getPostBySlug('draft-post')).toBeUndefined();

      const preview = await getPostBySlug('draft-post', {
        includeFuture: true,
      });

      expect(preview?.frontmatter.draft).toBe(true);
      expect(preview?.frontmatter.title).toBe('Draft Post');
    });

    it('returns undefined for future posts by default', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2024-01-01').getTime(),
      );

      const post = await getPostBySlug('future-post');

      expect(post).toBeUndefined();
    });

    it('returns future posts when includeFuture is enabled', async () => {
      getCurrentTimestampMock.mockResolvedValueOnce(
        new Date('2024-01-01').getTime(),
      );

      const post = await getPostBySlug('future-post', { includeFuture: true });

      expect(post?.frontmatter.title).toBe('Future Post');
    });
  });
});
