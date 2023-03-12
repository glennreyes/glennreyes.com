import photo from '~/assets/images/photo.jpg';
import { Photo } from '~/components/ui/elements/Photo';
import { Hero } from '~/components/ui/layout/Hero';
import { SocialIcon } from '~/components/ui/social/SocialIcon';
import { SocialLink } from '~/components/ui/social/SocialLink';
import { SocialList } from '~/components/ui/social/SocialList';
import { ScreenReaderText } from '~/components/ui/text/ScreenReaderText';
import { GitHub } from '~/icons/GitHub';
import { Instagram } from '~/icons/Instagram';
import { LinkedIn } from '~/icons/LinkedIn';
import { Twitter } from '~/icons/Twitter';
import { description, github, instagram, linkedin, name, twitter } from '~/utils/constants';

export function HeroSection() {
  return (
    <Hero
      description={description}
      heading={name}
      image={<Photo alt={`Photo of ${name}`} height={128} priority src={photo} width={128} />}
      subhead="Hello, I'm"
    >
      <SocialList>
        <SocialList.Item>
          <SocialLink href={`https://twitter.com/${twitter}`}>
            <SocialIcon icon={Twitter} />
            <ScreenReaderText>Follow on Twitter</ScreenReaderText>
          </SocialLink>
        </SocialList.Item>
        <SocialList.Item>
          <SocialLink href={`https://instagram.com/${instagram}`}>
            <SocialIcon icon={Instagram} />
            <ScreenReaderText>Follow on Instagram</ScreenReaderText>
          </SocialLink>
        </SocialList.Item>
        <SocialList.Item>
          <SocialLink href={`https://github.com/${github}`}>
            <SocialIcon icon={GitHub} />
            <ScreenReaderText>Follow on GitHub</ScreenReaderText>
          </SocialLink>
        </SocialList.Item>
        <SocialList.Item>
          <SocialLink href={`https://linkedin.com/in/${linkedin}`}>
            <SocialIcon icon={LinkedIn} />
            <ScreenReaderText>Follow on LinkedIn</ScreenReaderText>
          </SocialLink>
        </SocialList.Item>
      </SocialList>
    </Hero>
  );
}