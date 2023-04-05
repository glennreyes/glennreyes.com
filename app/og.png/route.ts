import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.toString();
  const url = new URL(`/api/og?${params}`, 'http://localhost:3000');
  const response = await fetch(url);
  const body = await response.arrayBuffer();

  return new Response(body, {
    headers: {
      'content-type': response.headers.get('content-type') || 'image/png',
    },
  });
}
