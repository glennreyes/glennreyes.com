import type { Metadata } from 'next';

import { ArrowUpRight, Send } from 'lucide-react';
import Image from 'next/image';

import speaking from '@/assets/images/speaking.jpg';
import { GitHub } from '@/components/icons/github';
import { Instagram } from '@/components/icons/instagram';
import { LinkedIn } from '@/components/icons/linkedin';
import { X } from '@/components/icons/x';
import { Divider } from '@/components/ui/elements/divider';
import { Card } from '@/components/ui/layout/card';
import { Content } from '@/components/ui/layout/content';
import { List } from '@/components/ui/layout/list';
import { Page } from '@/components/ui/layout/page';
import { email, github, instagram, linkedin, x } from '@/lib/constants';
import { readMDXFile } from '@/lib/mdx/read-mdx-file';

interface AboutPageFrontmatter {
  heading: string;
  lead: string;
  title: string;
}

const file = 'content/pages/about.mdx';

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await readMDXFile<AboutPageFrontmatter>(file);

  return {
    title: frontmatter.title,
  };
};

const AboutPage = async () => {
  const { content, frontmatter } =
    await readMDXFile<AboutPageFrontmatter>(file);

  return (
    <Page>
      <Page.Header lead={frontmatter.lead}>{frontmatter.heading}</Page.Header>
      <Image
        alt="Speaking"
        className="h-96 w-full rounded-3xl object-cover object-right sm:object-center"
        height={384}
        placeholder="blur"
        priority
        src={speaking}
        width={992}
      />
      <Content>
        <Content.Primary>
          <Page.Body>{content}</Page.Body>
        </Content.Primary>
        <Content.Secondary>
          <Card>
            <div className="grid gap-6">
              <Card.Body title="Online">
                <List spacing="dense">
                  <List.Item>
                    <Card.Item
                      link={`https://x.com/${x}`}
                      title={
                        <span className="inline-flex w-full items-center justify-between gap-2">
                          X
                          <ArrowUpRight
                            className="h-5 w-5 text-slate-300 dark:text-slate-700"
                            strokeWidth={2}
                          />
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
                          <ArrowUpRight
                            className="h-5 w-5 text-slate-300 dark:text-slate-700"
                            strokeWidth={2}
                          />
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
                          <ArrowUpRight
                            className="h-5 w-5 text-slate-300 dark:text-slate-700"
                            strokeWidth={2}
                          />
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
                          <ArrowUpRight
                            className="h-5 w-5 text-slate-300 dark:text-slate-700"
                            strokeWidth={2}
                          />
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
                  link={`mailto:${email}`}
                  title={
                    <span className="inline-flex w-full items-center justify-between gap-2">
                      {email}
                    </span>
                  }
                >
                  <Send
                    className="h-6 w-6 text-slate-300 dark:text-slate-700"
                    strokeWidth={2}
                  />
                </Card.Item>
              </Card.Body>
            </div>
          </Card>
        </Content.Secondary>
      </Content>
    </Page>
  );
};

export default AboutPage;
