import Link from 'next/link';
import { description, name } from '~/lib/constants';
import { Avatar } from '../avatar/Avatar';
import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';
import { Paragraph } from '../ui/typography/Paragraph';

export function AboutAuthor() {
  return (
    <Card as="section">
      <Card.Body title="About The Author">
        <div className="grid items-center gap-6 sm:flex">
          <Link className="flex-none rounded-full" href="/about">
            <Avatar size={28} />
          </Link>
          <div className="grid gap-4">
            <H4 as="h2">
              <Link href="/about">{name}</Link>
            </H4>
            <Paragraph>{description}</Paragraph>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
