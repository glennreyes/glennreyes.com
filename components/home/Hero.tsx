import Image from 'next/image';
import photo from '~/assets/images/photo.jpg';
import { SocialIcon } from '~/components/ui/social/SocialIcon';
import { SocialLink } from '~/components/ui/social/SocialLink';
import { SocialList } from '~/components/ui/social/SocialList';
import { H1 } from '~/components/ui/typography/H1';
import { GitHub } from '~/icons/GitHub';
import { Instagram } from '~/icons/Instagram';
import { LinkedIn } from '~/icons/LinkedIn';
import { Twitter } from '~/icons/Twitter';
import { description, github, instagram, linkedin, name, twitter } from '~/lib/constants';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:flex">
        <Image alt={name} className="h-36 w-36 rounded-full border-4 border-stone-200" src={photo} />
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
              <SocialLink aria-label="Follow on Twitter" href={`https://twitter.com/${twitter}`}>
                <SocialIcon aria-hidden icon={Twitter} />
              </SocialLink>
            </SocialList.Item>
            <SocialList.Item>
              <SocialLink aria-label="Follow on Instagram" href={`https://instagram.com/${instagram}`}>
                <SocialIcon aria-hidden icon={Instagram} />
              </SocialLink>
            </SocialList.Item>
            <SocialList.Item>
              <SocialLink aria-label="Follow on GitHub" href={`https://github.com/${github}`}>
                <SocialIcon aria-hidden icon={GitHub} />
              </SocialLink>
            </SocialList.Item>
            <SocialList.Item>
              <SocialLink aria-label="Follow on LinkedIn" href={`https://linkedin.com/in/${linkedin}`}>
                <SocialIcon aria-hidden icon={LinkedIn} />
              </SocialLink>
            </SocialList.Item>
          </SocialList>
        </div>
      </div>
    </section>
  );
}
