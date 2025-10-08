import Link from 'next/link';

import { description, name } from '@/lib/constants';

import { Avatar } from '../avatar/avatar';
import { Card } from '../ui/layout/card';
import { H4 } from '../ui/typography/h4';
import { Paragraph } from '../ui/typography/paragraph';

export function AboutAuthor() {
  return (
    <Card asChild>
      <section>
        <Card.Body title="About the Author">
          <div className="grid items-center gap-6 sm:flex">
            <Link className="flex-none rounded-full" href="/about">
              <Avatar transitionName="about-author-avatar" />
            </Link>
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
