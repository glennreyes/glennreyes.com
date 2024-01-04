import { Appearances } from '@/components/home/appearances';
import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { Newsletter } from '@/components/newsletter/newsletter';
import { Content } from '@/components/ui/layout/content';
import { Page } from '@/components/ui/layout/page';

export const revalidate = 3600;

const HomePage = () => (
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

export default HomePage;
