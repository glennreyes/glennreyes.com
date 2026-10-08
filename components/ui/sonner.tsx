'use client';

import type { ToasterProps } from 'sonner';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme();

  function isValidTheme(
    value: string | undefined,
  ): value is ToasterProps['theme'] {
    return value === 'light' || value === 'dark' || value === 'system';
  }

  const validTheme = isValidTheme(theme) ? theme : 'system';

  return (
    <Sonner
      theme={validTheme}
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-900 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-2xl dark:group-[.toaster]:bg-black dark:group-[.toaster]:text-neutral-100 dark:group-[.toaster]:border-neutral-800',
          description:
            'group-[.toast]:text-neutral-600 dark:group-[.toast]:text-neutral-400',
          actionButton:
            'group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900',
          cancelButton:
            'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-600 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400',
          success:
            'group-[.toast]:bg-neutral-50 group-[.toast]:text-neutral-900 group-[.toast]:border-neutral-200 dark:group-[.toast]:bg-neutral-950/20 dark:group-[.toast]:text-neutral-200 dark:group-[.toast]:border-neutral-900/30',
          error:
            'group-[.toast]:bg-red-50 group-[.toast]:text-red-900 group-[.toast]:border-red-200 dark:group-[.toast]:bg-red-950/20 dark:group-[.toast]:text-red-200 dark:group-[.toast]:border-red-900/30',
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
