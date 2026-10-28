import type { Meta, StoryObj } from '@storybook/nextjs';

import { freedivingMedia } from '@/lib/site-content';

import { MediaGallery } from './media-gallery';

const meta = {
  title: 'Personal site/Media gallery',
  component: MediaGallery,
  tags: ['autodocs'],
  parameters: { layout: 'padded', a11y: { test: 'error' } },
  args: { items: freedivingMedia.slice(0, 3) },
} satisfies Meta<typeof MediaGallery>;
export default meta;
type Story = StoryObj<typeof meta>;
export const PhotosAndFilms: Story = {};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
