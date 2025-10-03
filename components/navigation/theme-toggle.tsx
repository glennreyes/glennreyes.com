'use client';

import type { ComponentPropsWithoutRef } from 'react';

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import type { Theme } from '@/lib/theme';

import { useMounted } from '@/lib/hooks/use-mounted';
import { useTheme } from '@/lib/hooks/use-theme';

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none');

  setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none');
  }, 0);
}

const themes: Theme[] = ['light', 'dark', 'system'];
const icons: Record<Theme, React.ComponentType<ComponentPropsWithoutRef<'svg'>>> = {
  light: SunIcon,
  dark: MoonIcon,
  system: ComputerDesktopIcon,
};

export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, theme } = useTheme();

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    disableTransitionsTemporarily();
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    if (nextTheme) {
      setTheme(nextTheme);
    }
  };
  const Icon = icons[theme];

  return (
    <button
      aria-label={`Switch theme (current: ${theme})`}
      className="rounded-full border border-slate-300/25 bg-white/25 p-2.5 text-slate-500 transition hover:border-slate-200 hover:text-slate-600 focus-visible:text-slate-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:transition-none active:scale-95 active:border-slate-300 active:text-slate-700 disabled:opacity-75 dark:border-slate-600/25 dark:bg-slate-900/75 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-300 dark:focus-visible:text-slate-300 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950 dark:active:border-slate-700 dark:active:text-slate-200"
      onClick={cycleTheme}
      type="button"
    >
      <motion.div
        key={theme}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.8, rotate: -180 }}
        initial={{ scale: 0.8, rotate: 180 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <Icon aria-hidden className="h-6 w-6" />
      </motion.div>
    </button>
  );
}
