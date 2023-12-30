'use server';

import { subscribe as subscribeBase } from '@/lib/newsletter';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function subscribe(data: FormData) {
  const email = data.get('email');
  const theme = data.get('theme');

  const result = z
    .object({
      email: z.string(),
      theme: z.enum(['dark', 'light']).default('light'),
    })
    .safeParse({ email, theme });

  if (!result.success) {
    return 'Invalid data';
  }

  try {
    await subscribeBase(result.data);
  } catch {
    return 'Error subscribing';
  }

  redirect('/subscribe/confirm');
}
