import { GitHub } from '~/icons/GitHub';
import { Instagram } from '~/icons/Instagram';
import { LinkedIn } from '~/icons/LinkedIn';
import { Twitter } from '~/icons/Twitter';
import { description, github, instagram, linkedin, name, twitter } from '~/lib/constants';
import { Avatar } from '../avatar/Avatar';
import { IconButton } from '../ui/elements/IconButton';
import { Container } from '../ui/layout/Container';
import { H1 } from '../ui/typography/H1';
import { HeroAvatar } from './HeroAvatar';

export function Hero() {
  return (
    <Container as="section" className="grid gap-8 py-8 lg:flex">
      <HeroAvatar>
        <Avatar className="border-4 border-slate-200 dark:border-slate-800/50" priority />
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
              aria-label="Follow on Instagram"
              as="link"
              href={`https://instagram.com/${instagram}`}
              icon={Instagram}
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
          <li>
            <IconButton
              appearance="tertiary"
              aria-label="Follow on LinkedIn"
              as="link"
              href={`https://linkedin.com/in/${linkedin}`}
              icon={LinkedIn}
              size={7}
            />
          </li>
        </ul>
      </div>
    </Container>
  );
}
