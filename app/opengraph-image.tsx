/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/server';
import { origin } from '~/lib/constants';

export const runtime = 'edge';

export default async function opengraphImage() {
  // eslint-disable-next-line @next/next/no-img-element
  return new ImageResponse(<img alt="" src={`${origin}/og.png`} tw="h-full w-full" />, {
    height: 1080,
    width: 1920,
  });
}
