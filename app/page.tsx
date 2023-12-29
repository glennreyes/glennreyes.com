import { Appearances } from '@/components/home/appearances2';
import { Hero } from '@/components/home/hero2';
import { Posts } from '@/components/home/posts2';
import { Newsletter } from '@/components/newsletter/newsletter2';
import { Content } from '@/components/ui/layout/content2';
import { Page } from '@/components/ui/layout/page2';

export const revalidate = 3600;

export default function Home() {
  return (
    <Page>
      <Hero />
      <Content>
        <Content.Primary className="lg:col-span-7">
          <Posts />
        </Content.Primary>
        <Content.Secondary className="lg:col-span-5">
          <Appearances />
          <Newsletter />
        </Content.Secondary>
      </Content>
    </Page>
  );
}
