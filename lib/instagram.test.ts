import { describe, expect, it, vi } from 'vitest';

vi.mock('next/cache', () => ({ cacheLife: () => {}, cacheTag: () => {} }));
import { parseInstagramPosts } from './instagram';

const photo = {
  id: 'photo',
  caption: 'At the surface',
  media_type: 'IMAGE',
  media_url: 'https://scontent.cdninstagram.com/photo.jpg',
  permalink: 'https://www.instagram.com/p/photo/',
};
describe('Instagram media', () => {
  it('normalizes photos and uses video covers rather than loading films', () => {
    const posts = parseInstagramPosts({
      data: [
        photo,
        {
          ...photo,
          id: 'film',
          media_type: 'VIDEO',
          media_url: 'https://scontent.cdninstagram.com/film.mp4',
          thumbnail_url: 'https://scontent.cdninstagram.com/cover.jpg',
        },
      ],
    });
    expect(posts.map((post) => post.image)).toEqual([
      photo.media_url,
      'https://scontent.cdninstagram.com/cover.jpg',
    ]);
    expect(posts[1]?.video).toBe(true);
  });
  it('filters unsafe links and unknown image hosts', () => {
    expect(
      parseInstagramPosts({
        data: [
          { ...photo, permalink: 'javascript:alert(1)' },
          { ...photo, media_url: 'https://unknown.example/photo.jpg' },
        ],
      }),
    ).toEqual([]);
  });
  it('handles a missing or malformed provider response', () => {
    expect(parseInstagramPosts({ error: 'expired token' })).toEqual([]);
    expect(parseInstagramPosts({ data: [{ id: 'incomplete' }] })).toEqual([]);
  });
  it('keeps the feed small', () => {
    expect(
      parseInstagramPosts({ data: Array.from({ length: 6 }, () => photo) }),
    ).toHaveLength(3);
  });
});
