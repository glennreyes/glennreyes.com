import { ImageResponse } from 'next/og';
import { z } from 'zod';

import { origin } from '@/lib/constants';

export const runtime = 'edge';

export const size = { height: 1080, width: 1920 };

interface OpenGraphImageConfigParams {
  slug: string;
}

interface OpenGraphImageConfig {
  params: OpenGraphImageConfigParams;
}

const OpengraphImage = async ({ params }: OpenGraphImageConfig) => {
  try {
    const res = await fetch(`${origin}/posts/${params.slug}/meta`);

    if (!res.ok) {
      throw new Error(`Failed to fetch meta data: ${res.status}`);
    }

    const { publishedAt, title } = z
      .object({ publishedAt: z.string(), title: z.string() })
      .parse(await res.json());
    const geistSans500Response = await fetch(
      new URL(
        '../../../node_modules/@fontsource/geist/files/geist-latin-500-normal.woff2',
        import.meta.url,
      ),
    );
    const geistSans500 = await geistSans500Response.arrayBuffer();
    const geistSans400Response = await fetch(
      new URL(
        '../../../node_modules/@fontsource/geist/files/geist-latin-400-normal.woff2',
        import.meta.url,
      ),
    );
    const geistSans400 = await geistSans400Response.arrayBuffer();

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
          tw="bg-slate-900 flex flex-col h-full w-full px-48 pt-40 pb-80"
        >
          <time tw="text-8xl text-slate-500">{publishedAt}</time>
          <h1 tw="text-8xl font-medium text-slate-50 pt-6">{title}</h1>
        </div>
      ),
      {
        fonts: [
          {
            data: geistSans400,
            name: 'Inter',
            weight: 400,
          },
          {
            data: geistSans500,
            name: 'Inter',
            weight: 500,
          },
        ],
        ...size,
      },
    );
  } catch {
    // Fallback to default OpenGraph image
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
};

export default OpengraphImage;
