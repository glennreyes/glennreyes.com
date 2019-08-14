import { PageRendererProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Content from '../components/content';
import Layout from '../components/layout';
import { H1 } from '../components/mdx/headings';
import SEO from '../components/seo';
import { TalkQuery } from '../types/generated/graphql';

type TalkProps = PageRendererProps & {
  data: TalkQuery;
};

const Talk = ({ data }: TalkProps) => {
  if (!data.talk) return null;

  const { body, title } = data.talk;

  return (
    <Layout>
      <SEO title={title} />
      {(title || body) && (
        <Content>
          {title && <H1>{title}</H1>}
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </Content>
      )}
    </Layout>
  );
};

export default Talk;

export const pageQuery = graphql`
  query Talk($id: String!) {
    talk(id: { eq: $id }) {
      body
      title
    }
  }
`;
