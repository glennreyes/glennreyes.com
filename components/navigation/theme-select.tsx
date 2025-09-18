'use client';

import type { ComponentPropsWithoutRef, ComponentType } from 'react';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import type { Theme } from '@/lib/theme';

import { useMounted } from '@/lib/hooks/use-mounted';
import { useTheme } from '@/lib/hooks/use-theme';
import { cn } from '@/lib/utils';

import { IconButton } from '../ui/elements/icon-button';
import { Select } from '../ui/forms/select';

interface ThemeOption {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  label: string;
  value: Theme;
}

function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none');

  setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none');
  }, 0);
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

interface ThemeSelectProps {
  native?: boolean;
}

export function ThemeSelect({ native }: ThemeSelectProps) {
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
        <div className="pointer-events-none flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 font-medium text-slate-700 peer-focus:ring-4 peer-focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900/75 dark:text-slate-300 dark:peer-focus:border-slate-600 dark:peer-focus:ring-teal-900/25">
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
          <ListboxButton as={Fragment}>
            <IconButton
              appearance="secondary"
              aria-label="Switch Theme"
              icon={Icon}
            />
          </ListboxButton>
          <Transition
            as="div"
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-95"
            show={open}
          >
            <ListboxOptions
              as="ul"
              className="absolute top-full right-0 z-10 mt-2 grid overflow-hidden rounded-xl border border-slate-300/25 bg-white py-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:border-slate-600/25 dark:bg-slate-950 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950"
            >
              {options.map(({ icon: CurrentIcon, ...option }) => (
                <ListboxOption
                  as={Fragment}
                  key={option.value}
                  value={option.value}
                >
                  {({ focus, selected }) => {
                    const itemClasses = cn(
                      'flex cursor-pointer items-center gap-3 px-4 py-2.5 font-medium transition',
                      focus && 'bg-slate-50 dark:bg-slate-900/50',
                      selected
                        ? 'text-teal-600 dark:text-teal-200/75'
                        : 'text-slate-800 dark:text-slate-200',
                    );
                    const iconClasses = cn(
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
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
