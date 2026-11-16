import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Keep exploring' },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Pending: Story = {
  args: { children: 'Subscribing…', disabled: true },
};
