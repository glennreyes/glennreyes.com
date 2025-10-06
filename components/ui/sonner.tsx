'use client';

import type { ToasterProps } from 'sonner';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-900 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-2xl dark:group-[.toaster]:bg-black dark:group-[.toaster]:text-gray-100 dark:group-[.toaster]:border-gray-800',
          description:
            'group-[.toast]:text-gray-600 dark:group-[.toast]:text-gray-400',
          actionButton:
            'group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50 dark:group-[.toast]:bg-gray-50 dark:group-[.toast]:text-gray-900',
          cancelButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:text-gray-600 dark:group-[.toast]:bg-gray-800 dark:group-[.toast]:text-gray-400',
          success:
            'group-[.toast]:bg-teal-50 group-[.toast]:text-teal-900 group-[.toast]:border-teal-200 dark:group-[.toast]:bg-teal-950/20 dark:group-[.toast]:text-teal-200 dark:group-[.toast]:border-teal-900/30',
          error:
            'group-[.toast]:bg-red-50 group-[.toast]:text-red-900 group-[.toast]:border-red-200 dark:group-[.toast]:bg-red-950/20 dark:group-[.toast]:text-red-200 dark:group-[.toast]:border-red-900/30',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
