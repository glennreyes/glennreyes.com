'use client';

import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { SunIcon, ComputerDesktopIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';
interface ThemeOption {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  label: string;
  value: Theme;
}

const options: ThemeOption[] = [
  { icon: SunIcon, label: 'Light', value: 'light' },
  { icon: MoonIcon, label: 'Dark', value: 'dark' },
  { icon: ComputerDesktopIcon, label: 'System', value: 'system' },
];
const themes: Record<Theme, Pick<ThemeOption, 'icon' | 'label'>> = {
  dark: { icon: MoonIcon, label: 'Dark' },
  light: { icon: SunIcon, label: 'Light' },
  system: { icon: ComputerDesktopIcon, label: 'System' },
};

function isTheme(value: string | undefined): value is Theme {
  return value === 'dark' || value === 'light' || value === 'system';
}

interface ThemeSwitchProps {
  native?: boolean;
}

export function ThemeSwitch({ native }: ThemeSwitchProps) {
  const { theme: currentTheme, setTheme, resolvedTheme: currentResolvedTheme } = useTheme();
  const theme = isTheme(currentTheme) ? currentTheme : 'system';
  const resolvedTheme = isTheme(currentResolvedTheme) ? currentResolvedTheme : 'light';
  const { label } = themes[theme];
  const { icon: Icon } = themes[resolvedTheme];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (native) {
    return (
      <div className="relative flex items-center gap-2 text-sm font-semibold text-slate-800">
        <Icon aria-hidden className="h-6 w-6 text-slate-400" />
        {label} <ChevronDownIcon aria-hidden className="h-4 w-4 text-slate-300" />
        <select
          aria-label="Switch Theme"
          className="absolute inset-0 border-none opacity-0"
          onChange={(event) => {
            const selected = options.find((option) => option.value === event.target.value)?.value;

            if (selected) {
              setTheme(selected);
            }
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <Listbox as="div" className="relative grid items-center" onChange={setTheme} value={theme}>
      <Listbox.Button aria-label="Switch Theme" className="p-2">
        <Icon aria-hidden className="h-6 w-6 text-slate-500" />
      </Listbox.Button>
      <Listbox.Options
        as="ul"
        className="absolute right-0 top-full mt-2 grid gap-2 rounded-xl border border-slate-100 p-4"
      >
        {options.map(({ icon: CurrentIcon, ...option }) => (
          <Listbox.Option
            as="li"
            className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-800"
            key={option.value}
            value={option.value}
          >
            <CurrentIcon aria-hidden className="h-6 w-6 text-slate-400" />
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
