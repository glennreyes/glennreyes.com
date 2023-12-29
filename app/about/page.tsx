import {
  ArrowUpRightIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import speaking from '@/assets/images/speaking.jpg';
import { Divider } from '@/components/ui/elements/divider2';
import { Card } from '@/components/ui/layout/card2';
import { Content } from '@/components/ui/layout/content2';
import { List } from '@/components/ui/layout/list2';
import { Page } from '@/components/ui/layout/page2';
import { MDXContent } from '@/components/ui/mdx/mdx-content';
import { GitHub } from '@/components/icons/github2';
import { Instagram } from '@/components/icons/instagram2';
import { LinkedIn } from '@/components/icons/linkedin2';
import { X } from '@/components/icons/x2';
import { github, instagram, linkedin, x } from '@/lib/constants';
import { allPages } from 'contentlayer/generated';

const page = allPages.find(({ path }) => path === 'about');

export const metadata = {
  title: page?.title,
};

export default function AboutPage() {
  if (!page) {
    notFound();
  }

  return (
    <Page>
      <Page.Header lead={page.lead} meta={page.meta}>
        {page.heading ?? page.title}
      </Page.Header>
      <Image
        alt="Speaking"
        className="h-96 w-full rounded-[1.75rem] object-cover object-right sm:object-center"
        height={384}
        placeholder="blur"
        priority
        src={speaking}
        width={992}
      />
      <Content>
        <Content.Primary>
          <Page.Body>
            <MDXContent code={page.body.code} />
          </Page.Body>
        </Content.Primary>
        <Content.Secondary>
          <Card>
            <div className="grid gap-6">
              <Card.Body title="Online">
                <List>
                  <List.Item>
                    <Card.Item
                      link={`https://x.com/${x}`}
                      title={
                        <span className="inline-flex w-full items-center justify-between gap-2">
                          X
                          <ArrowUpRightIcon className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                        </span>
                      }
                    >
                      <X className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                    </Card.Item>
                  </List.Item>
                  <List.Item>
                    <Card.Item
                      link={`https://github.com/${github}`}
                      title={
                        <span className="inline-flex w-full items-center justify-between gap-2">
                          GitHub
                          <ArrowUpRightIcon className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                        </span>
                      }
                    >
                      <GitHub className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                    </Card.Item>
                  </List.Item>
                  <List.Item>
                    <Card.Item
                      link={`https://linkedin.com/in/${linkedin}`}
                      title={
                        <span className="inline-flex w-full items-center justify-between gap-2">
                          LinkedIn
                          <ArrowUpRightIcon className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                        </span>
                      }
                    >
                      <LinkedIn className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                    </Card.Item>
                  </List.Item>
                  <List.Item>
                    <Card.Item
                      link={`https://instagram.com/${instagram}`}
                      title={
                        <span className="inline-flex w-full items-center justify-between gap-2">
                          Instagram
                          <ArrowUpRightIcon className="h-5 w-5 text-slate-300 dark:text-slate-700" />
                        </span>
                      }
                    >
                      <Instagram className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                    </Card.Item>
                  </List.Item>
                </List>
              </Card.Body>
              <Divider />
              <Card.Body title="Email">
                <Card.Item
                  link="mailto:glenn@glennreyes.com"
                  title={
                    <span className="inline-flex w-full items-center justify-between gap-2">
                      glenn@glennreyes.com
                    </span>
                  }
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                </Card.Item>
              </Card.Body>
            </div>
          </Card>
        </Content.Secondary>
      </Content>
    </Page>
  );
}
