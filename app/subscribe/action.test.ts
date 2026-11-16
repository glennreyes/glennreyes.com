import { beforeEach, describe, expect, it, vi } from 'vitest';

const { subscribeProvider } = vi.hoisted(() => ({
  subscribeProvider:
    vi.fn<(data: { email: string; theme: string }) => Promise<void>>(),
}));
vi.mock('@/lib/newsletter', () => ({ subscribe: subscribeProvider }));
import { subscribe } from './action';
function form(email: string) {
  const data = new FormData();
  data.set('email', email);
  data.set('theme', 'light');
  return data;
}
describe('Newsletter action', () => {
  beforeEach(() => {
    subscribeProvider.mockReset();
    subscribeProvider.mockResolvedValue();
  });
  it('rejects invalid email before contacting the provider', async () => {
    expect((await subscribe(null, form('invalid'))).status).toBe('error');
    expect(subscribeProvider).not.toHaveBeenCalled();
  });
  it('confirms successful subscriptions', async () => {
    expect((await subscribe(null, form('reader@example.com'))).status).toBe(
      'success',
    );
    expect(subscribeProvider).toHaveBeenCalledWith({
      email: 'reader@example.com',
      theme: 'light',
    });
  });
  it('shows an error when the provider fails', async () => {
    subscribeProvider.mockRejectedValue(new Error('provider failed'));
    expect((await subscribe(null, form('reader@example.com'))).status).toBe(
      'error',
    );
  });
});
