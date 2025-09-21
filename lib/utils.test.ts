import { describe, it, expect } from 'vitest';

import { cn } from './utils';

describe('cn utility', () => {
  it('combines classes correctly', () => {
    expect(cn('text-red-500', 'bg-blue-100')).toBe('text-red-500 bg-blue-100');
  });

  it('handles conditional classes', () => {
    const condition1 = true;
    const condition2 = false;

    expect(cn('base-class', condition1 && 'conditional-class')).toBe(
      'base-class conditional-class',
    );

    expect(cn('base-class', condition2 && 'conditional-class')).toBe('base-class');
  });

  it('merges conflicting Tailwind classes', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('p-4', 'px-2')).toBe('p-4 px-2');
  });

  it('handles empty inputs', () => {
    expect(cn()).toBe('');
    expect(cn('')).toBe('');
    expect(cn(undefined, null, false)).toBe('');
  });

  it('handles arrays and objects', () => {
    expect(cn(['text-red-500', 'bg-blue-100'])).toBe(
      'text-red-500 bg-blue-100',
    );
    expect(cn({ 'text-red-500': true, 'bg-blue-100': false })).toBe(
      'text-red-500',
    );
  });
});
