import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { subscribe } from '~/lib/newsletter';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const email = data.get('email');

  if (typeof email !== 'string') {
    return new NextResponse('Invalid email', { status: 400 });
  }

  await subscribe(email);

  return new NextResponse('OK', { status: 200 });
}
