import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';
import Text from '../components/text';
import { BlogQuery } from '../types/generated/graphql';

const Section = styled.section`
  margin: ${p => p.theme.space[7]}px ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    margin: ${p.theme.space[5] + p.theme.space[7]}px ${p.theme.space[5]}px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const Post = styled.article`
  margin: ${p => p.theme.space[4]}px 0;
  max-width: 768px;
`;

const PostTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0 0 ${p => p.theme.space[2]}px;
`;

const Home = () => {
  const { allMdx }: BlogQuery = useStaticQuery(
    graphql`
      query Blog {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            excerpt(pruneLength: 280)
            fields {
              slug
            }
            frontmatter {
              title
            }
            id
          }
        }
      }
    `,
  );

  const posts =
    (allMdx &&
      allMdx.nodes &&
      allMdx.nodes.map(({ fields, frontmatter, ...node }) => ({
        slug: fields && fields.slug,
        title: frontmatter && frontmatter.title,
        ...node,
      }))) ||
    [];

  return (
    <Layout>
      <SEO title="Blog" />
      <Section>
        <Content>
          {posts.map(({ excerpt, id, slug, title }) => (
            <Post key={id}>
              <Link to={slug}>
                <PostTitle>{title}</PostTitle>
                <Text>{excerpt}</Text>
              </Link>
            </Post>
          ))}
        </Content>
      </Section>
    </Layout>
  );
};

export default Home;
