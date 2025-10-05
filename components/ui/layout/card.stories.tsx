import type { Meta, StoryObj } from '@storybook/nextjs';

import { Badge } from '../elements/badge';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card>
      <Card.Body title="Card Title">
        <p>This is a basic card with a title and content.</p>
      </Card.Body>
    </Card>
  ),
};

export const WithItems: Story = {
  render: () => (
    <Card>
      <Card.Body title="Events">
        <Card.Item
          date={new Date('2024-03-15')}
          description="A conference about web development"
          link="/events/conf-2024"
          title="Conference 2024"
        />
        <Card.Item
          date={new Date('2024-04-20')}
          description="Workshop on React performance"
          link="/events/workshop"
          title="React Workshop"
        />
      </Card.Body>
    </Card>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Card>
      <Card.Body title="Tags">
        <Card.Item
          description="Learn about modern React patterns"
          meta={
            <div className="flex gap-2">
              <Badge color="teal">React</Badge>
              <Badge color="sky">TypeScript</Badge>
            </div>
          }
          title="React Patterns"
        />
      </Card.Body>
    </Card>
  ),
};
