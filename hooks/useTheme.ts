import { useTheme as useThemeBase } from 'next-themes';
import { useEffect } from 'react';
import { parseResolvedTheme, parseTheme } from '~/lib/theme';

export function useTheme() {
  const { theme: themeBase, setTheme, resolvedTheme: resolvedThemeBase } = useThemeBase();
  const theme = parseTheme(themeBase);
  const resolvedTheme = parseResolvedTheme(resolvedThemeBase);

  useEffect(() => {
    document.head
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolvedTheme === 'dark' ? '#020617' : '#ffffff');
  }, [resolvedTheme]);

  return { resolvedTheme, setTheme, theme };
}
