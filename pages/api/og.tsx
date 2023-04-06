/* eslint-disable react/no-unknown-property */
import { ImageResponse } from '@vercel/og';
import { format, isThisYear } from 'date-fns';
import type { NextRequest } from 'next/server';
import { origin } from '~/lib/constants';
import { allPosts } from '~/lib/posts';

export const config = {
  runtime: 'edge',
};

const urls = {
  interBold: new URL('../../assets/fonts/Inter-Bold.otf', import.meta.url),
  // interRegular: new URL('../../assets/fonts/Inter-Regular.otf', import.meta.url),
};

export default async function handler(request: NextRequest) {
  const [
    fontBold,
    // fontRegular
  ] = await Promise.all([
    fetch(urls.interBold).then((res) => res.arrayBuffer()),
    // fetch(urls.interRegular).then((res) => res.arrayBuffer()),
  ]);

  const { searchParams } = request.nextUrl;
  const id = searchParams.get('post');
  const post = allPosts.find(({ slug }) => slug === id);

  if (!post) {
    // eslint-disable-next-line @next/next/no-img-element
    return new ImageResponse(<img alt="" src={`${origin}/images/og.png`} tw="h-full w-full" />, {
      height: 1080,
      width: 1920,
    });
  }

  const date = new Date(post.publishedAt);

  return new ImageResponse(
    (
      <div
        style={{ backgroundImage: `url(${origin}/images/og-post.png)` }}
        tw="bg-slate-900 flex flex-col h-full w-full px-48 pt-40 pb-80"
      >
        <time tw="text-4xl text-slate-500">{format(date, isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy')}</time>
        <h1 tw="text-9xl font-bold tracking-tighter font-bold text-slate-50 pt-2">{post.title}</h1>
      </div>
    ),
    {
      fonts: [
        // {
        //   data: fontRegular,
        //   name: 'Inter',
        //   weight: 400,
        // },
        {
          data: fontBold,
          name: 'Inter',
          weight: 700,
        },
      ],
      height: 1080,
      width: 1920,
    },
  );
}
