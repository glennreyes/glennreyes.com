import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Content from '../components/content';
import Layout from '../components/layout';
import SEO from '../components/seo';

type DefaultProps = RouteComponentProps & {
  children: React.ReactNode;
  pageContext: {
    frontmatter?: {
      title?: string;
      description?: string;
    };
  };
};

const Default = ({
  children,
  pageContext: { frontmatter },
  path,
}: DefaultProps) => {
  const description = (frontmatter && frontmatter.description) || undefined;
  const title = (frontmatter && frontmatter.title) || undefined;

  return (
    <Layout path={path}>
      <SEO description={description} title={title} />
      <Content>{children}</Content>
    </Layout>
  );
};

export default Default;
