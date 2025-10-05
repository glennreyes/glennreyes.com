import type { Meta, StoryObj } from '@storybook/nextjs';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Elements/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['rose', 'sky', 'slate', 'teal'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Teal: Story = {
  args: {
    children: 'Teal Badge',
    color: 'teal',
  },
};

export const Rose: Story = {
  args: {
    children: 'Rose Badge',
    color: 'rose',
  },
};

export const Sky: Story = {
  args: {
    children: 'Sky Badge',
    color: 'sky',
  },
};

export const Slate: Story = {
  args: {
    children: 'Slate Badge',
    color: 'slate',
  },
};
