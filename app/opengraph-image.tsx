/* eslint-disable react/no-unknown-property */
import { origin } from '@/lib/constants';
import { ImageResponse } from 'next/og';

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
