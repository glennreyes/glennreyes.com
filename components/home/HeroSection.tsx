import photo from '../../assets/photo.jpg';
import { GitHub } from '../icons/GitHub';
import { Instagram } from '../icons/Instagram';
import { LinkedIn } from '../icons/LinkedIn';
import { Twitter } from '../icons/Twitter';
import { HeroSection as HeroSectionBase } from '../ui/HeroSection';
import { HeroSectionPhoto } from '../ui/HeroSectionPhoto';
import { HeroSectionSocialIcon } from '../ui/HeroSectionSocialIcon';
import { HeroSectionSocialLink } from '../ui/HeroSectionSocialLink';
import { HeroSectionSocialList } from '../ui/HeroSectionSocialList';
import { ScreenReaderText } from '../ui/ScreenReaderText';

export function HeroSection() {
  return (
    <HeroSectionBase
      description="Software Engineer, Tech Speaker and Workshop Instructor — With a passion for building innovative products and user interfaces using cutting edge web technologies."
      heading="Glenn Reyes"
      image={<HeroSectionPhoto alt="Photo of Glenn Reyes" placeholder="blur" priority src={photo} />}
      subhead="Hello, I'm"
    >
      <HeroSectionSocialList>
        <HeroSectionSocialList.Item>
          <HeroSectionSocialLink href="https://twitter.com/glnnrys">
            <HeroSectionSocialIcon icon={Twitter} />
            <ScreenReaderText>Follow on Twitter</ScreenReaderText>
          </HeroSectionSocialLink>
        </HeroSectionSocialList.Item>
        <HeroSectionSocialList.Item>
          <HeroSectionSocialLink href="https://instagram.com/glnnrys">
            <HeroSectionSocialIcon icon={Instagram} />
            <ScreenReaderText>Follow on Instagram</ScreenReaderText>
          </HeroSectionSocialLink>
        </HeroSectionSocialList.Item>
        <HeroSectionSocialList.Item>
          <HeroSectionSocialLink href="https://github.com/glennreyes">
            <HeroSectionSocialIcon icon={GitHub} />
            <ScreenReaderText>Follow on GitHub</ScreenReaderText>
          </HeroSectionSocialLink>
        </HeroSectionSocialList.Item>
        <HeroSectionSocialList.Item>
          <HeroSectionSocialLink href="https://linkedin.com/in/glnnrys">
            <HeroSectionSocialIcon icon={LinkedIn} />
            <ScreenReaderText>Follow on LinkedIn</ScreenReaderText>
          </HeroSectionSocialLink>
        </HeroSectionSocialList.Item>
      </HeroSectionSocialList>
    </HeroSectionBase>
  );
}
