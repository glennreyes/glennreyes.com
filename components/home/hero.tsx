import { GitHub } from '@/components/icons/github';
import { Instagram } from '@/components/icons/instagram';
import { LinkedIn } from '@/components/icons/linkedin';
import { X } from '@/components/icons/x';
import {
  description,
  github,
  instagram,
  linkedin,
  name,
  x,
} from '@/lib/constants';

import { Avatar } from '../avatar/avatar';
import { IconButton } from '../ui/elements/icon-button';
import { H1 } from '../ui/typography/h1';
import { HeroAvatar } from './hero-avatar';

export function Hero() {
  return (
    <section className="grid gap-8 py-8 lg:flex">
      <HeroAvatar>
        <Avatar priority />
      </HeroAvatar>
      <div className="grid gap-8">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Hello, I&apos;m</p>
          <div className="flex justify-between gap-4">
            <div className="grid gap-4">
              <H1>{name}</H1>
              <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
        <ul className="-mx-2.5 flex gap-2">
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on X"
              as="link"
              href={`https://x.com/${x}`}
              icon={X}
              size={6}
            />
          </li>
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on Instagram"
              as="link"
              href={`https://instagram.com/${instagram}`}
              icon={Instagram}
              size={6}
            />
          </li>
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on GitHub"
              as="link"
              href={`https://github.com/${github}`}
              icon={GitHub}
              size={6}
            />
          </li>
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on LinkedIn"
              as="link"
              href={`https://linkedin.com/in/${linkedin}`}
              icon={LinkedIn}
              size={6}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
