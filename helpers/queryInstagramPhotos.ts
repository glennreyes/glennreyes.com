import { z } from 'zod';
import type { Truthy } from '../utils/isTruthy';
import { isTruthy } from '../utils/isTruthy';

const amount = 5;

async function getAccessToken() {
  const longLivedUserToken = z.string().parse(process.env.INSTAGRAM_LONG_LIVED_USER_TOKEN);
  const response = await (
    await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedUserToken}`,
    )
  ).json();

  const result = z
    .object({ access_token: z.string(), expires_in: z.number(), token_type: z.literal('bearer') })
    .safeParse(response);

  if (!result.success) {
    return undefined;
  }

  return result.data.access_token;
}

async function getMediaIds(accessToken: string) {
  const response = await (
    await fetch(`https://graph.instagram.com/me?fields=media&access_token=${accessToken}`)
  ).json();

  const result = z
    .object({
      id: z.string(),
      media: z.object({
        data: z.array(z.object({ id: z.string() })),
      }),
    })
    .safeParse(response);

  if (!result.success) {
    return undefined;
  }

  return result.data;
}

async function getMedia(accessToken: string, mediaId: string) {
  const response = await (
    await fetch(`https://graph.instagram.com/${mediaId}?fields=media_type,media_url&access_token=${accessToken}`)
  ).json();

  const result = z
    .object({
      id: z.string(),
      media_type: z.union([z.literal('IMAGE'), z.literal('VIDEO'), z.literal('CAROUSEL_ALBUM')]),
      media_url: z.string(),
    })
    .safeParse(response);

  if (!result.success) {
    return undefined;
  }

  return { id: result.data.id, type: result.data.media_type, url: result.data.media_url };
}

async function getLatestPhotos(accessToken: string) {
  const user = await getMediaIds(accessToken);

  if (!user) {
    return [];
  }

  return (await Promise.all(user.media.data.map((media) => getMedia(accessToken, media.id))))
    .filter((media): media is Truthy<typeof media> => isTruthy(media) && media.type === 'IMAGE')
    .slice(0, amount)
    .map((photo) => ({ id: photo.id, url: photo.url }));
}

export async function queryInstagramPhotos() {
  if (process.env.NODE_ENV !== 'production') {
    return Array.from({ length: amount }, (_, index) => ({
      id: `${index}`,
      url: `https://picsum.photos/seed/${index}/720/720`,
    }));
  }

  const accessToken = await getAccessToken();

  if (!accessToken) {
    return [];
  }

  return getLatestPhotos(accessToken);
}
