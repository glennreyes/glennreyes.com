'use client';

import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { SunIcon, ComputerDesktopIcon, MoonIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Fragment } from 'react';
import { useMounted } from '~/hooks/useMounted';
import { IconButton } from '../ui/elements/IconButton';
import { Select } from '../ui/forms/Select';

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
  const mounted = useMounted();
  const { theme: currentTheme, setTheme, resolvedTheme: currentResolvedTheme } = useTheme();
  const theme = isTheme(currentTheme) ? currentTheme : 'system';
  const resolvedTheme = isTheme(currentResolvedTheme) ? currentResolvedTheme : 'light';
  const { label } = themes[theme];
  const { icon: Icon } = themes[resolvedTheme];

  if (!mounted) {
    return null;
  }

  if (native) {
    return (
      <div className="relative">
        <Select
          aria-label="Switch Theme"
          className="peer absolute inset-0"
          onChange={(event) => {
            const selected = options.find((option) => option.value === event.target.value)?.value;

            if (selected) {
              setTheme(selected);
            }
          }}
          value={theme}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <div className="pointer-events-none flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">
          <Icon aria-hidden className="h-6 w-6 text-slate-400" />
          {label} <ChevronDownIcon aria-hidden className="h-4 w-4 text-slate-300" />
        </div>
      </div>
    );
  }

  return (
    <Listbox as="div" className="relative grid items-center" onChange={setTheme} value={theme}>
      <Listbox.Button as={Fragment}>
        <IconButton appearance="secondary" aria-label="Switch Theme" icon={Icon} />
      </Listbox.Button>
      <Listbox.Options
        as="ul"
        className="absolute right-0 top-full z-10 mt-2 grid overflow-hidden rounded-xl border border-slate-100 bg-white py-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
      >
        {options.map(({ icon: CurrentIcon, ...option }) => (
          <Listbox.Option as={Fragment} key={option.value} value={option.value}>
            {({ active, selected }) => {
              const itemClasses = clsx(
                'flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm font-semibold transition',
                active && 'bg-slate-50',
                selected ? 'text-teal-600' : 'text-slate-800',
              );
              const iconClasses = clsx('h-6 w-6', selected ? 'text-teal-600' : 'text-slate-400');

              return (
                <li className={itemClasses}>
                  <CurrentIcon aria-hidden className={iconClasses} />
                  {option.label}
                </li>
              );
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
