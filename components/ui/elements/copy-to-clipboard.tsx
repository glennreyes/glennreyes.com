'use client';

import { Check, Copy } from 'lucide-react';
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
    'bg-transparent text-gray-500 transition hover:text-gray-400 focus:transition-none active:text-gray-500 dark:bg-transparent dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-500',
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
        icon={Copy}
        size={5}
        onClick={copyToClipboard}
      />
      <span className={checkIconClasses}>
        <Check aria-hidden className="h-5 w-5" strokeWidth={2} />
      </span>
    </div>
  );
}
