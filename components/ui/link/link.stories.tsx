import type { Meta, StoryObj } from '@storybook/nextjs';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
  args: {
    href: '/about',
    children: 'Internal Link',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
};

export const Anchor: Story = {
  args: {
    href: '#section',
    children: 'Anchor Link',
  },
};
