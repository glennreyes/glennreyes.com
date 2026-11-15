import { createColorScheme, createLocalStorage } from '@ui-sdk/core';
import { z } from 'zod';

export type Theme = 'dark' | 'light' | 'system';

export const colorScheme = createColorScheme({
  global: true,
  storage: createLocalStorage('theme'),
});

export type ResolvedTheme = 'dark' | 'light';

export const parseResolvedTheme = (value?: string): ResolvedTheme => {
  const result = z.enum(['dark', 'light']).safeParse(value);

  return result.success ? result.data : 'light';
};
