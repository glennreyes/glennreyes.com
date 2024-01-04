import { parseResolvedTheme, parseTheme } from '@/lib/theme';
import { useTheme as useThemeBase } from 'next-themes';

export const useTheme = () => {
  const {
    resolvedTheme: resolvedThemeBase,
    setTheme,
    theme: themeBase,
  } = useThemeBase();
  const theme = parseTheme(themeBase);
  const resolvedTheme = parseResolvedTheme(resolvedThemeBase);

  return { resolvedTheme, setTheme, theme };
};
