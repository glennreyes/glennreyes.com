import { ContentSection } from '~/components/home/ContentSection';
import { HeroSection } from '~/components/home/HeroSection';
import { PostsSection } from '~/components/home/PostsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-error Server Components */}
        <PostsSection />
      </ContentSection>
    </>
  );
}
