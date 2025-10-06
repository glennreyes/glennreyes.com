'use server';

import { z } from 'zod';

import { subscribe as subscribeBase } from '@/lib/newsletter';

interface SubscribeState {
  message: string;
  status: 'error' | 'idle' | 'success';
  timestamp: number;
}

export const subscribe = async (
  _prevState: SubscribeState | null,
  data: FormData,
): Promise<SubscribeState> => {
  const email = data.get('email');
  const theme = data.get('theme');
  const result = z
    .object({
      email: z.email('Please enter a valid email address'),
      theme: z.enum(['dark', 'light']).default('light'),
    })
    .safeParse({ email, theme });

  if (!result.success) {
    return {
      message: result.error.issues[0]?.message ?? 'Invalid data',
      status: 'error',
      timestamp: Date.now(),
    };
  }

  try {
    await subscribeBase(result.data);

    return {
      message:
        'Check your inbox! We sent you a confirmation email to verify your subscription.',
      status: 'success',
      timestamp: Date.now(),
    };
  } catch {
    return {
      message: 'Something went wrong. Please try again later.',
      status: 'error',
      timestamp: Date.now(),
    };
  }
};
