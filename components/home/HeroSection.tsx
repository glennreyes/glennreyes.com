import photo from '~/assets/images/photo.jpg';
import { Hero } from '~/components/ui/layout/Hero';
import { SocialIcon } from '~/components/ui/social/SocialIcon';
import { SocialLink } from '~/components/ui/social/SocialLink';
import { SocialList } from '~/components/ui/social/SocialList';
import { GitHub } from '~/icons/GitHub';
import { Instagram } from '~/icons/Instagram';
import { LinkedIn } from '~/icons/LinkedIn';
import { Twitter } from '~/icons/Twitter';
import { description, github, instagram, linkedin, name, twitter } from '~/lib/constants';

export function HeroSection() {
  return (
    <Hero description={description} heading={name} name={name} photo={photo} subhead="Hello, I'm">
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
    </Hero>
  );
}
