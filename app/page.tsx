import { Suspense } from 'react';

import { Appearances } from '@/components/home/appearances';
import { AppearancesLoading } from '@/components/home/appearances-loading';
import { Hero } from '@/components/home/hero';
import { Posts } from '@/components/home/posts';
import { PostsLoading } from '@/components/home/posts-loading';
import { Newsletter } from '@/components/newsletter/newsletter';
import { Content } from '@/components/ui/layout/content';
import { Page } from '@/components/ui/layout/page';

const RootPage = () => (
  <Page>
    <Hero />
    <Content>
      <Content.Primary className="lg:col-span-7">
        <Suspense fallback={<PostsLoading />}>
          <Posts />
        </Suspense>
      </Content.Primary>
      <Content.Secondary className="lg:col-span-5">
        <Suspense fallback={<AppearancesLoading />}>
          <Appearances />
        </Suspense>
        <Newsletter />
      </Content.Secondary>
    </Content>
  </Page>
);

export default RootPage;
