import { act, render, screen } from '@testing-library/react';
import { createAgent } from '@ui-sdk/react/agent';
import { expect, test } from 'vitest';
import { freedivingMedia } from '@/lib/site-content';
import { MediaGallery } from './media-gallery';

const agent = createAgent();

test('the retained film gallery opens an accessible player and removes it on close', async () => {
  render(
    <MediaGallery
      items={freedivingMedia.filter((media) => media.id === 'nofins')}
    />,
  );
  const label = 'Open Napaling · August 2026: No fins. One breath.';
  expect(agent.snapshot().map((entry) => entry.label)).toContain(label);
  await act(async () => {
    const result = await agent.act({
      steps: [{ ref: label, action: 'setOpen', args: [true] }],
    });
    expect(result.ok).toBe(true);
  });
  const dialog = screen.getByRole('dialog', { name: 'No fins. One breath.' });
  expect(dialog).toHaveAccessibleDescription('Napaling · August 2026');
  expect(dialog.querySelector('video')).toHaveAttribute('controls');
  expect(dialog.querySelector('video')).toHaveAttribute('preload', 'none');
  await act(async () => {
    screen.getByRole('button', { name: 'Close' }).click();
  });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.querySelector('video')).toBeNull();
});
