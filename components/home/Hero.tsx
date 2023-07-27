import { Avatar } from '../avatar/Avatar';
import { IconButton } from '../ui/elements/IconButton';
import { H1 } from '../ui/typography/H1';
import { HeroAvatar } from './HeroAvatar';
import { description, github, name, twitter } from '@/lib/constants';
import { Twitter } from '@/icons/Twitter';
import { GitHub } from '@/icons/GitHub';

export function Hero() {
  return (
    <section className="grid gap-8 py-8 lg:flex">
      <HeroAvatar>
        <Avatar priority />
      </HeroAvatar>
      <div className="grid gap-6">
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">Hello, I'm</p>
          <div className="flex justify-between gap-4">
            <div className="grid gap-4">
              <H1>{name}</H1>
              <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
            </div>
          </div>
        </div>
        <ul className="-mx-2.5 flex gap-2">
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on Twitter"
              as="link"
              href={`https://twitter.com/${twitter}`}
              icon={Twitter}
              size={7}
            />
          </li>
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on GitHub"
              as="link"
              href={`https://github.com/${github}`}
              icon={GitHub}
              size={7}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
