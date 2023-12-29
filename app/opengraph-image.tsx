/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/og';
import { origin } from '@/lib/constants';

export const runtime = 'edge';

export default function opengraphImage() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt="" src={`${origin}/og.png`} tw="h-full w-full" />
    ),
    {
      height: 1080,
      width: 1920,
    },
  );
}
