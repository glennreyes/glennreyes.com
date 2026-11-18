import type { Metadata } from 'next';
import { ProjectCards } from '@/components/site/project-cards';
import { Page } from '@/components/ui/layout/page';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <Page>
      <Page.Header lead="A few things I’ve made.">Projects.</Page.Header>
      <ProjectCards headingLevel="h2" />
    </Page>
  );
}
