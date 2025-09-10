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

const errorSchema = z.object({ error: z.string() });
const successSchema = z.object({
  publishedAt: z.string(),
  title: z.string(),
});
const OpengraphImage = async ({ params }: OpenGraphImageConfig) => {
  try {
    const res = await fetch(`${origin}/posts/${params.slug}/meta`);

    if (!res.ok) {
      throw new Error(`Failed to fetch meta data: ${res.status}`);
    }

    const rawData = (await res.json()) as unknown;
    const errorResult = errorSchema.safeParse(rawData);

    if (errorResult.success) {
      throw new Error(errorResult.data.error);
    }

    const { publishedAt, title } = successSchema.parse(rawData);
    // Load Geist fonts in WOFF format (supported by @vercel/og)
    const geistSans500Response = await fetch(
      new URL(
        '../../../node_modules/@fontsource/geist/files/geist-latin-500-normal.woff',
        import.meta.url,
      ),
    );
    const geistSans500 = await geistSans500Response.arrayBuffer();
    const geistSans400Response = await fetch(
      new URL(
        '../../../node_modules/@fontsource/geist/files/geist-latin-400-normal.woff',
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
            name: 'Geist',
            weight: 400,
          },
          {
            data: geistSans500,
            name: 'Geist',
            weight: 500,
          },
        ],
        ...size,
      },
    );
  } catch (error) {
    console.error('Error generating OpenGraph image:', error);

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
