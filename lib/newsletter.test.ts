import { afterEach, describe, expect, it, vi } from 'vitest';
import { subscribe } from './newsletter';

describe('Newsletter provider', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });
  it('rejects a failed provider response instead of reporting success', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn<typeof fetch>(async () => new Response('{}', { status: 500 })),
    );
    await expect(
      subscribe({ email: 'reader@example.com', theme: 'light' }),
    ).rejects.toThrow('rejected');
  });
});
