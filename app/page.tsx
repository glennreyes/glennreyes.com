import { HeroSection } from '../components/ui/HeroSection';
import Image from 'next/image';
import photo from '../assets/photo.jpg';
import { ScreenReaderText } from '../components/ui/ScreenReaderText';
import { Twitter } from '../components/icons/Twitter';
import { Instagram } from '../components/icons/Instagram';
import { GitHub } from '../components/icons/GitHub';
import { LinkedIn } from '../components/icons/LinkedIn';
import { HeroSectionSocialList } from '../components/ui/HeroSectionSocialList';
import { HeroSectionSocialLink } from '../components/ui/HeroSectionSocialLink';
import { HeroSectionSocialIcon } from '../components/ui/HeroSectionSocialIcon';
import { queryInstagramPhotos } from '../helpers/queryInstagramPhotos';

export default async function HomePage() {
  const photos = await queryInstagramPhotos();

  return (
    <>
      <HeroSection>
        <div>
          <p className="text-sm font-medium text-orange-600 sm:text-base md:text-xl">Hello, I'm</p>
          <div className="flex justify-between gap-4">
            <div className="grid gap-4 md:max-w-4xl">
              <h1 className="text-4xl font-bold text-zinc-800 sm:text-6xl md:text-8xl">Glenn Reyes</h1>
              <p className="text-sm text-zinc-600 sm:text-base md:text-xl">
                Software Engineer, Tech Speaker and Workshop Instructor — With a passion for building innovative
                products and user interfaces using cutting edge web technologies.
              </p>
            </div>
            <Image
              alt="Photo of Glenn Reyes"
              className="h-32 w-32 rounded-full shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48"
              placeholder="blur"
              priority
              src={photo}
            />
          </div>
        </div>
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
      </HeroSection>
      <section className="flex justify-center overflow-hidden">
        {photos.map((image) => (
          <Image
            alt=""
            className="aspect-[7/8] w-[480px] object-cover"
            height={288}
            key={image.id}
            src={image.url}
            width={240}
          />
        ))}
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi laboriosam commodi praesentium facilis
        tempora repudiandae excepturi asperiores iste iure tempore similique, possimus soluta. Officiis exercitationem
        asperiores unde saepe fugit!
      </p>
    </>
  );
}
