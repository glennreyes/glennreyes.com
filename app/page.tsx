import { Appearances } from '@/components/home/Appearances';
import { Hero } from '@/components/home/Hero';
import { Posts } from '@/components/home/Posts';
import { Newsletter } from '@/components/newsletter/Newsletter';
import { Content } from '@/components/ui/layout/Content';
import { Page } from '@/components/ui/layout/Page';

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
          {/* @ts-expect-error Server Components */}
          <Appearances />
          <Newsletter />
        </Content.Secondary>
      </Content>
    </Page>
  );
}
