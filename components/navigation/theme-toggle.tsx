'use client';

import { LayoutGroup, motion } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';

import type { Theme } from '@/lib/theme';

import { useMounted } from '@/lib/hooks/use-mounted';
import { useTheme } from '@/lib/hooks/use-theme';
import { cn } from '@/lib/utils';

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none');

  setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none');
  }, 0);
}

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
    <LayoutGroup>
      <div className="relative inline-flex items-center gap-0.5 rounded-full border border-gray-300/25 bg-gray-100/50 p-0.5 dark:border-gray-700/25 dark:bg-gray-900/50">
        {themes.map(({ icon: Icon, value }) => {
          const isActive = theme === value;

          return (
            <button
              key={value}
              aria-label={`Switch to ${value} theme`}
              className={cn(
                'relative cursor-pointer rounded-full p-1.5 transition-colors',
                isActive
                  ? 'text-gray-700 dark:text-gray-200'
                  : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
              )}
              onClick={() => {
                disableTransitionsTemporarily();
                setTheme(value);
              }}
              type="button"
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm dark:bg-gray-800"
                  layoutId="theme-toggle-active"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="relative h-4 w-4" strokeWidth={2} />
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
