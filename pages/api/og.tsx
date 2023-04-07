/* eslint-disable react/no-unknown-property */
import { ImageResponse } from '@vercel/og';
import { format, isThisYear } from 'date-fns';
import type { NextRequest } from 'next/server';
import { origin } from '~/lib/constants';
import { allPosts } from '~/lib/posts';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line @next/next/no-img-element
const defaultImageResponse = new ImageResponse(<img alt="" src={`${origin}/og.png`} tw="h-full w-full" />, {
  height: 1080,
  width: 1920,
});

export default async function handler(request: NextRequest) {
  const [interBold, interRegular] = await Promise.all([
    fetch(new URL('../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
    fetch(new URL('../../assets/fonts/Inter-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
  ]);
  const postSlug = request.nextUrl.searchParams.get('post');

  if (!postSlug) {
    return defaultImageResponse;
  }

  const post = allPosts.find(({ slug }) => slug === postSlug);

  if (post) {
    const date = new Date(post.publishedAt);
    const dateFormatted = format(date, isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy');

    return new ImageResponse(
      (
        <div
          style={{ backgroundImage: `url(${origin}/images/og-content.png)` }}
          tw="bg-slate-900 flex flex-col justify-center h-full w-full px-48 pt-40 pb-80"
        >
          <time tw="text-4xl text-slate-500">{dateFormatted}</time>
          <h1 tw="text-9xl font-bold tracking-tighter font-bold text-slate-50 pt-2">{post.title}</h1>
        </div>
      ),
      {
        fonts: [
          {
            data: interRegular,
            name: 'Inter',
            weight: 400,
          },
          {
            data: interBold,
            name: 'Inter',
            weight: 700,
          },
        ],
        height: 1080,
        width: 1920,
      },
    );
  }

  return defaultImageResponse;
}
