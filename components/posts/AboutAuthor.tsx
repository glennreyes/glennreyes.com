import Image from 'next/image';
import Link from 'next/link';
import photo from '~/assets/images/photo.jpg';
import { description, name } from '~/lib/constants';
import { Card } from '../ui/layout/Card';
import { H4 } from '../ui/typography/H4';

export function AboutAuthor() {
  return (
    <Card as="section">
      <Card.Body>
        <div className="grid items-center gap-6 sm:flex">
          <Link className="flex-none rounded-full" href="/about">
            <Image alt={name} className="h-28 w-28 rounded-full border-2 border-stone-200" src={photo} />
          </Link>
          <div className="grid gap-4">
            <H4 as="h2">
              <Link href="/about">About {name}</Link>
            </H4>
            <p className="text-sm text-stone-500">{description}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
