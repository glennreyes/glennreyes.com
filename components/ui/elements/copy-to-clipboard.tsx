'use client';

import { CheckIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { IconButton } from './icon-button';

interface CopyToClipboardProps {
  value: string;
}

export function CopyToClipboard({ value }: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setIsCopied(true);

    window.setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  const copyIconClasses = cn(
    isCopied && 'scale-0 opacity-0',
    'bg-transparent text-slate-500 transition hover:text-slate-400 focus:transition-none active:text-slate-500 dark:bg-transparent dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-500',
  );
  const checkIconClasses = cn(
    !isCopied && 'scale-0 opacity-0',
    'pointer-events-none absolute inset-0 grid items-center justify-center text-teal-500 transition',
  );

  return (
    <div className="relative grid items-center justify-center">
      <IconButton
        appearance="tertiary"
        aria-label="Copy to Clipboard"
        className={copyIconClasses}
        icon={Square2StackIcon}
        onClick={copyToClipboard}
        size={5}
      />
      <span className={checkIconClasses}>
        <CheckIcon aria-hidden className="h-5 w-5" />
      </span>
    </div>
  );
}
