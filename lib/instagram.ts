import { cacheLife, cacheTag } from 'next/cache';
import { z } from 'zod';

const imageUrl = z.url().refine((value) => {
  const url = new URL(value);
  return (
    url.protocol === 'https:' &&
    (url.hostname.endsWith('.cdninstagram.com') ||
      url.hostname.endsWith('.fbcdn.net'))
  );
});
const postSchema = z.object({
  id: z.string(),
  caption: z.string().optional(),
  media_type: z.enum(['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']),
  media_url: imageUrl.optional(),
  thumbnail_url: imageUrl.optional(),
  permalink: z.url().refine((value) => {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'www.instagram.com';
  }),
});
export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  href: string;
  video: boolean;
}
export function parseInstagramPosts(input: unknown): InstagramPost[] {
  const response = z.object({ data: z.array(z.unknown()) }).safeParse(input);
  if (!response.success) {
    return [];
  }
  return response.data.data
    .flatMap((item) => {
      const result = postSchema.safeParse(item);
      if (!result.success) {
        return [];
      }
      const post = result.data;
      const image =
        post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
      if (image === undefined) {
        return [];
      }
      return [
        {
          id: post.id,
          caption: post.caption?.slice(0, 180) ?? 'A moment along the way.',
          image,
          href: post.permalink,
          video: post.media_type === 'VIDEO',
        },
      ];
    })
    .slice(0, 3);
}
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('instagram');
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (
    token === undefined ||
    userId === undefined ||
    !/^\d{5,30}$/.test(userId)
  ) {
    return [];
  }
  const url = new URL('https://graph.instagram.com/v25.0/' + userId + '/media');
  url.searchParams.set(
    'fields',
    'id,caption,media_type,media_url,thumbnail_url,permalink',
  );
  url.searchParams.set('limit', '3');
  try {
    const response = await fetch(url, {
      headers: { Authorization: 'Bearer ' + token },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      return [];
    }
    const input: unknown = await response.json();
    return parseInstagramPosts(input);
  } catch {
    return [];
  }
}
