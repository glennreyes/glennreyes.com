import { ContentSection } from '~/components/home/ContentSection';
import { HeroSection } from '~/components/home/HeroSection';
import { PostsSection } from '~/components/home/PostsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection>
        {/* @ts-expect-error Server Components */}
        <PostsSection />
      </ContentSection>
    </>
  );
}
