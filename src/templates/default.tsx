import { PageRendererProps } from 'gatsby';
import React from 'react';
import Content from '../components/content';
import Layout from '../components/layout';
import SEO from '../components/seo';

type DefaultProps = PageRendererProps & {
  children: React.ReactNode;
  frontmatter: {
    title?: string;
    description?: string;
  };
};

const Default = ({ children, frontmatter }: DefaultProps) => {
  const description = (frontmatter && frontmatter.description) || undefined;
  const title = (frontmatter && frontmatter.title) || undefined;

  return (
    <Layout>
      <SEO description={description} title={title} />
      <Content>{children}</Content>
    </Layout>
  );
};

export default Default;
