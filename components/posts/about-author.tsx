import Link from 'next/link';

import { Avatar } from '@/components/avatar/avatar';
import { AvatarLink } from '@/components/avatar/avatar-link';
import { description, name } from '@/lib/constants';

import { Card } from '../ui/layout/card';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';

export function AboutAuthor() {
  return (
    <Card asChild>
      <section>
        <Card.Body title="About the Author">
          <div className="grid items-center gap-6 sm:flex">
            <AvatarLink
              aria-label="About Glenn Reyes"
              className="flex-none rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2 dark:focus-visible:ring-teal-700/50 dark:focus-visible:ring-offset-slate-950"
              href="/about"
            >
              <Avatar />
            </AvatarLink>
            <div className="grid gap-4">
              <H4 asChild>
                <h2>
                  <Link href="/about">{name}</Link>
                </h2>
              </H4>
              <Paragraph>{description}</Paragraph>
            </div>
          </div>
        </Card.Body>
      </section>
    </Card>
  );
}
