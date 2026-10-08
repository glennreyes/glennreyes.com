import type { Meta, StoryObj } from '@storybook/nextjs';

import { freedivingMedia } from '@/lib/site-content';

import { MediaCard } from './media-card';

const media = freedivingMedia.find((item) => item.id === 'blue');
if (media === undefined) {
  throw new Error('Missing hero media');
}
const meta = {
  title: 'Personal site/Media card',
  component: MediaCard,
  tags: ['autodocs'],
  args: { media, className: 'h-hero' },
  parameters: { a11y: { test: 'error' } },
} satisfies Meta<typeof MediaCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Underwater: Story = {};
