'use client';

import type { Theme } from '@/lib/theme';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import { useMounted } from '@/lib/hooks/use-mounted';
import { useTheme } from '@/lib/hooks/use-theme';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment } from 'react';

import { IconButton } from '../ui/elements/icon-button';
import { Select } from '../ui/forms/select';

interface ThemeOption {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  label: string;
  value: Theme;
}

const disableTransitionsTemporarily = () => {
  document.documentElement.classList.add('[&_*]:!transition-none');

  setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none');
  }, 0);
};
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

interface ThemeSelectProps {
  native?: boolean;
}

export const ThemeSelect = ({ native }: ThemeSelectProps) => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme, theme } = useTheme();
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
          className="peer absolute inset-0 cursor-pointer"
          onChange={(event) => {
            disableTransitionsTemporarily();
            const selected = options.find(
              (option) => option.value === event.target.value,
            )?.value;

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
        <div className="pointer-events-none flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition peer-focus:ring-4 peer-focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-300 dark:peer-focus:border-slate-600 dark:peer-focus:ring-teal-900/25">
          <Icon
            aria-hidden
            className="h-6 w-6 text-slate-400 dark:text-slate-500"
          />
          {label}{' '}
          <ChevronDownIcon
            aria-hidden
            className="h-4 w-4 text-slate-300 dark:text-slate-700"
          />
        </div>
      </div>
    );
  }

  return (
    <Listbox
      as="div"
      className="relative grid items-center"
      onChange={(value) => {
        disableTransitionsTemporarily();
        setTheme(value);
      }}
      value={theme}
    >
      {({ open }) => (
        <>
          <Listbox.Button as={Fragment}>
            <IconButton
              appearance="secondary"
              aria-label="Switch Theme"
              icon={Icon}
            />
          </Listbox.Button>
          <Transition
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-95"
            show={open}
          >
            <Listbox.Options
              as="ul"
              className="absolute right-0 top-full z-10 mt-2 grid overflow-hidden rounded-xl border border-slate-300/25 bg-white py-1 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:border-slate-600/25 dark:bg-slate-950 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950"
            >
              {options.map(({ icon: CurrentIcon, ...option }) => (
                <Listbox.Option
                  as={Fragment}
                  key={option.value}
                  value={option.value}
                >
                  {({ active, selected }) => {
                    const itemClasses = clsx(
                      'flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm font-semibold transition',
                      active && 'bg-slate-50 dark:bg-slate-900/50',
                      selected
                        ? 'text-teal-600 dark:text-teal-200/75'
                        : 'text-slate-800 dark:text-slate-200',
                    );
                    const iconClasses = clsx(
                      'h-6 w-6',
                      selected
                        ? 'text-teal-500/75 dark:text-teal-600/75'
                        : 'text-slate-400 dark:text-slate-500',
                    );

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
          </Transition>
        </>
      )}
    </Listbox>
  );
};
