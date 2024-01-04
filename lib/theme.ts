import { z } from 'zod';

export type Theme = 'dark' | 'light' | 'system';

export const parseTheme = (value?: string): Theme => {
  const result = z.enum(['dark', 'light', 'system']).safeParse(value);

  return result.success ? result.data : 'system';
};

export type ResolvedTheme = 'dark' | 'light';

export const parseResolvedTheme = (value?: string): ResolvedTheme => {
  const result = z.enum(['dark', 'light']).safeParse(value);

  return result.success ? result.data : 'light';
};
