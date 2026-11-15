import { act, render, screen } from '@testing-library/react';
import { createAgent } from '@ui-sdk/react/agent';
import { expect, test, vi } from 'vitest';

import { Menu } from './menu';

vi.mock('next/navigation', () => ({ usePathname: () => '/freediving' }));

const agent = createAgent();

test('the SDK can discover and operate the named mobile drawer', async () => {
  render(<Menu />);
  const trigger = screen.getByRole('button', { name: 'Open Menu' });
  const entries = agent
    .snapshot()
    .filter((entry) => !entry.offPage && entry.component !== 'more');
  expect(entries.map((entry) => entry.label)).toContain('Open Menu');
  for (const entry of entries) {
    expect(entry.label).not.toBe('');
  }
  await act(async () => {
    const result = await agent.act({
      steps: [{ ref: 'Open Menu', action: 'setOpen', args: [true] }],
    });
    expect(result.ok).toBe(true);
  });
  expect(screen.getByRole('dialog')).toHaveAccessibleName('Freediving');
  await act(async () => {
    const result = await agent.act({
      steps: [{ ref: 'Freediving', action: 'setOpen', args: [false] }],
    });
    expect(result.ok).toBe(true);
  });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveAttribute('aria-expanded', 'false');
});
