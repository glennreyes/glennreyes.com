import { description, name } from '@/lib/constants';
import Link from 'next/link';

import { Avatar } from '../avatar/avatar';
import { Card } from '../ui/layout/card';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';

export const AboutAuthor = () => (
  <Card asChild>
    <section>
      <Card.Body title="About The Author">
        <div className="grid items-center gap-6 sm:flex">
          <Link className="flex-none rounded-full" href="/about">
            <Avatar size={28} />
          </Link>
          <div className="grid gap-4">
            <H4>
              <h2>
                <Link href="/about">{name}</Link>
              </h2>
            </H4>
            <Paragraph className="text-sm">{description}</Paragraph>
          </div>
        </div>
      </Card.Body>
    </section>
  </Card>
);
