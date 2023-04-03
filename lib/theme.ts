import { z } from 'zod';

export type Theme = 'dark' | 'light' | 'system';

export function parseTheme(value?: string): Theme {
  const result = z.enum(['dark', 'light', 'system']).safeParse(value);

  return result.success ? result.data : 'system';
}

export type ResolvedTheme = 'dark' | 'light';

export function parseResolvedTheme(value?: string): ResolvedTheme {
  const result = z.enum(['dark', 'light']).safeParse(value);

  return result.success ? result.data : 'light';
}
