import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['default', 'input-button'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    appearance: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    appearance: 'secondary',
  },
};

export const InputButton: Story = {
  args: {
    children: 'Submit',
    variant: 'input-button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    as: 'link',
    href: '#',
  },
};
