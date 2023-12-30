import { useTheme as useThemeBase } from 'next-themes';
import { parseResolvedTheme, parseTheme } from '@/lib/theme';

export function useTheme() {
  const {
    resolvedTheme: resolvedThemeBase,
    setTheme,
    theme: themeBase,
  } = useThemeBase();
  const theme = parseTheme(themeBase);
  const resolvedTheme = parseResolvedTheme(resolvedThemeBase);

  return { resolvedTheme, setTheme, theme };
}
