'use client';

import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export function ThemeSwitch() {
  const [enabled, setEnabled] = useState(true);
  const Icon = enabled ? SunIcon : MoonIcon;

  return (
    <Switch checked={enabled} onChange={setEnabled}>
      <Icon aria-hidden className="h-6 w-6 text-slate-500" />
    </Switch>
  );
}
