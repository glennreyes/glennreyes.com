import { describe, expect, it } from 'vitest';

import { isAppRoute } from './route';

describe('isAppRoute', () => {
  it('accepts non-empty destinations', () => {
    expect(isAppRoute('/about')).toBe(true);
    expect(isAppRoute('https://example.com')).toBe(true);
    expect(isAppRoute('#heading')).toBe(true);
  });

  it('rejects empty destinations', () => {
    expect(isAppRoute('')).toBe(false);
  });
});
