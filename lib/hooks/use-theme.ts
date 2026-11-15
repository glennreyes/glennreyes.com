import { usePreference } from '@ui-sdk/react/preferences';
import { colorScheme, parseResolvedTheme } from '@/lib/theme';

export function useTheme() {
  const { value, resolved } = usePreference(colorScheme);
  return {
    theme: value,
    resolvedTheme: parseResolvedTheme(resolved),
    setTheme: colorScheme.set,
  };
}
