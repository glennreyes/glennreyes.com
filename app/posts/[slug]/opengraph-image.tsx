/* eslint-disable react/no-unknown-property */
import { origin } from '@/lib/constants';
import { allPosts } from '@/lib/posts';
import { format, isThisYear } from 'date-fns';
import { ImageResponse } from 'next/og';

import defaultOpengraphImage from '../../opengraph-image';

export const runtime = 'edge';

interface OpenGraphImageConfigParams {
  slug: string;
}

interface OpenGraphImageConfig {
  params: OpenGraphImageConfigParams;
}

export default async function opengraphImage({ params }: OpenGraphImageConfig) {
  const inter700 = fetch(
    new URL(
      '../../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const inter400 = fetch(
    new URL(
      '../../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const post = allPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    return defaultOpengraphImage();
  }

  const date = new Date(post.publishedAt);
  const dateFormatted = format(
    date,
    isThisYear(date) ? 'MMMM d' : 'MMMM d, yyyy',
  );

  return new ImageResponse(
    (
      <div
        style={{ backgroundImage: `url(${origin}/images/og-content.png)` }}
        tw="bg-slate-900 flex flex-col justify-center h-full w-full px-48 pt-40 pb-80"
      >
        <time tw="text-4xl text-slate-500">{dateFormatted}</time>
        <h1 tw="text-9xl font-bold tracking-tighter font-bold text-slate-50 pt-2">
          {post.title}
        </h1>
      </div>
    ),
    {
      fonts: [
        {
          data: await inter400,
          name: 'Inter',
          weight: 400,
        },
        {
          data: await inter700,
          name: 'Inter',
          weight: 700,
        },
      ],
      height: 1080,
      width: 1920,
    },
  );
}
