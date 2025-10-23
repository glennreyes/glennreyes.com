import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

const JSON_CONTENT_TYPES = [
  'application/json',
  'application/mcp+json',
  'application/vnd.modelcontext+json',
];

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== '/mcp') {
    return NextResponse.next();
  }

  const accepts = request.headers.get('accept') ?? '';
  const expectsJSON = JSON_CONTENT_TYPES.some((type) =>
    accepts.toLowerCase().includes(type),
  );
  const isReadMethod = request.method === 'GET' || request.method === 'HEAD';

  if (!isReadMethod || expectsJSON) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/mcp'],
};
