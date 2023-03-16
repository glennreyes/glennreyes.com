import { HeroSection } from '~/components/home/HeroSection';
import { PostsSection } from '~/components/home/PostsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="grid grid-cols-12">
        <div className="col-span-full lg:col-span-7 xl:col-span-8">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore-error Server Components */}
          <PostsSection />
        </div>
      </section>
    </>
  );
}
