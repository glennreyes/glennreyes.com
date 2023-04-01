'use client';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon, SunIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

interface ThemeSwitchProps {
  native?: boolean;
}

export function ThemeSwitch({ native }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('light');
  const setDark = () => setTheme('dark');
  const setLight = () => setTheme('light');
  const setSystem = () => setTheme('system');

  console.info(theme);

  if (native) {
    return (
      <div className="relative flex items-center gap-2 text-sm font-semibold text-slate-800">
        <SunIcon aria-hidden className="h-6 w-6 text-slate-400" />
        Light <ChevronDownIcon aria-hidden className="h-4 w-4 text-slate-300" />
        <select aria-label="Switch Theme" className="absolute inset-0 border-none opacity-0">
          <option onClick={setLight} value="light">
            Light
          </option>
          <option onClick={setDark} value="dark">
            Dark
          </option>
          <option onClick={setSystem} value="system">
            System
          </option>
        </select>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative grid items-center">
      <Menu.Button aria-label="Switch Theme" className="p-2">
        <SunIcon aria-hidden className="h-6 w-6 text-slate-500" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-full">
        <Menu.Item>{() => <button onClick={setLight}>Light</button>}</Menu.Item>
        <Menu.Item>{() => <button onClick={setDark}>Dark</button>}</Menu.Item>
        <Menu.Item>{() => <button onClick={setSystem}>System</button>}</Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
