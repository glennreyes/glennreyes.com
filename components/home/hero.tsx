import { GitHub } from '@/components/icons/github';
import { X } from '@/components/icons/x';
import { description, github, name, x } from '@/lib/constants';

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
        <p className="text-slate-600 dark:text-slate-400">Hello, I&apos;m</p>
        <div className="flex justify-between gap-4">
          <div className="grid gap-4">
            <H1>{name}</H1>
            <p className="max-w-2xl text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </div>
      <ul className="-mx-2.5 flex gap-2">
        <li>
          <IconButton
            appearance="tertiary"
            aria-label="Follow on X, formerly known as X"
            as="link"
            href={`https://x.com/${x}`}
            icon={X}
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
      </ul>
    </div>
  </section>
  );
}
