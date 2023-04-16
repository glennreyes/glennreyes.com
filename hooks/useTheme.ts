import { useTheme as useThemeBase } from 'next-themes';
import { parseResolvedTheme, parseTheme } from '~/lib/theme';

export function useTheme() {
  const { theme: themeBase, setTheme, resolvedTheme: resolvedThemeBase } = useThemeBase();
  const theme = parseTheme(themeBase);
  const resolvedTheme = parseResolvedTheme(resolvedThemeBase);

  return { resolvedTheme, setTheme, theme };
}
