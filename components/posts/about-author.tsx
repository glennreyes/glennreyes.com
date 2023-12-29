import Link from 'next/link';
import { Avatar } from '../avatar/avatar2';
import { Card } from '../ui/layout/card2';
import { H4 } from '../ui/typography/h42';
import { Paragraph } from '../ui/typography/paragraph2';
import { description, name } from '@/lib/constants';

export function AboutAuthor() {
  return (
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
}
