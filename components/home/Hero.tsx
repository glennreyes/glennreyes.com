import Image from 'next/image';
import photo from '~/assets/images/photo.jpg';
import { GitHub } from '~/icons/GitHub';
import { Instagram } from '~/icons/Instagram';
import { LinkedIn } from '~/icons/LinkedIn';
import { Twitter } from '~/icons/Twitter';
import { description, github, instagram, linkedin, name, twitter } from '~/lib/constants';
import { Container } from '../ui/layout/Container';
import { SocialLink } from '../ui/social/SocialLink';
import { SocialList } from '../ui/social/SocialList';
import { H1 } from '../ui/typography/H1';

export function Hero() {
  return (
    <Container as="section" className="grid gap-8 py-8 lg:flex">
      <Image alt={name} className="h-36 w-36 rounded-full border-4 border-slate-200" src={photo} />
      <div className="grid gap-8">
        <div>
          <p className="font-medium">Hello, I'm</p>
          <div className="flex justify-between gap-4">
            <div className="grid gap-4">
              <H1>{name}</H1>
              <p className="max-w-2xl leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
        <SocialList>
          <SocialList.Item>
            <SocialLink aria-label="Follow on Twitter" href={`https://twitter.com/${twitter}`} icon={Twitter} />
          </SocialList.Item>
          <SocialList.Item>
            <SocialLink aria-label="Follow on Instagram" href={`https://instagram.com/${instagram}`} icon={Instagram} />
          </SocialList.Item>
          <SocialList.Item>
            <SocialLink aria-label="Follow on GitHub" href={`https://github.com/${github}`} icon={GitHub} />
          </SocialList.Item>
          <SocialList.Item>
            <SocialLink aria-label="Follow on LinkedIn" href={`https://linkedin.com/in/${linkedin}`} icon={LinkedIn} />
          </SocialList.Item>
        </SocialList>
      </div>
    </Container>
  );
}
