import type { NextRequest } from 'next/server';
import { origin } from '~/lib/constants';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.toString();
  const url = new URL(`/api/og${params ? `?${params}` : ''}`, origin);
  const response = await fetch(url);
  const body = await response.arrayBuffer();

  return new Response(body, {
    headers: {
      'content-type': response.headers.get('content-type') || 'image/png',
    },
  });
}
