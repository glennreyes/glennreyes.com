import { origin } from '@/lib/constants';
import { ImageResponse } from 'next/og';
import { z } from 'zod';

export const runtime = 'edge';

export const size = { height: 1080, width: 1920 };

interface OpenGraphImageConfigParams {
  slug: string;
}

interface OpenGraphImageConfig {
  params: OpenGraphImageConfigParams;
}

const OpengraphImage = async ({ params }: OpenGraphImageConfig) => {
  const res = await fetch(`${origin}/posts/${params.slug}/meta`);
  const { publishedAt, title } = z
    .object({ publishedAt: z.string(), title: z.string() })
    .parse(await res.json());
  const geistSans700 = fetch(
    new URL(
      '../../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const geistSans400 = fetch(
    new URL(
      '../../../node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  if (!title) {
    return new ImageResponse(
      (
        <div
          style={{ backgroundImage: `url(${origin}/opengraph-image.png)` }}
          tw="h-full w-full"
        />
      ),
      size,
    );
  }

  return new ImageResponse(
    (
      <div
        style={{ backgroundImage: `url(${origin}/images/og-content.png)` }}
        tw="bg-slate-900 flex flex-col justify-center h-full w-full px-48 pt-40 pb-80"
      >
        <time tw="text-4xl text-slate-500">{publishedAt}</time>
        <h1 tw="text-9xl font-bold tracking-tighter font-bold text-slate-50 pt-2">
          {title}
        </h1>
      </div>
    ),
    {
      fonts: [
        {
          data: await geistSans400,
          name: 'Inter',
          weight: 400,
        },
        {
          data: await geistSans700,
          name: 'Inter',
          weight: 700,
        },
      ],
      ...size,
    },
  );
};

export default OpengraphImage;
