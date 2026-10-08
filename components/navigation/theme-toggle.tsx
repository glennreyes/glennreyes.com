'use client';

import { Monitor, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { Theme } from '@/lib/theme';
import { useMounted } from '@/lib/hooks/use-mounted';
import { useTheme } from '@/lib/hooks/use-theme';
import { cn } from '@/lib/utils';

const themes: { icon: typeof Sun; value: Theme }[] = [
  { icon: Monitor, value: 'system' },
  { icon: Sun, value: 'light' },
  { icon: Moon, value: 'dark' },
];
export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();
  if (!mounted) {
    return null;
  }
  return (
    <fieldset
      aria-label="Color theme"
      className="bg-muted inline-flex gap-1 rounded-full border p-1"
    >
      {themes.map(({ icon: Icon, value }) => (
        <Button
          key={value}
          aria-label={'Switch to ' + value + ' theme'}
          aria-pressed={theme === value}
          className={cn(
            theme === value
              ? 'bg-foreground text-background hover:bg-foreground/80 hover:text-background'
              : 'text-muted-foreground',
          )}
          onClick={() => setTheme(value)}
          size="icon"
          type="button"
          variant="ghost"
        >
          <Icon aria-hidden="true" />
        </Button>
      ))}
    </fieldset>
  );
}
