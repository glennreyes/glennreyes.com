import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArrowLink from '../components/arrow-link';
import Layout from '../components/layout';
import Link from '../components/link';
import Photo from '../components/photo';
import SEO from '../components/seo';
import Text from '../components/text';
import { HomeQuery } from '../types/generated/graphql';

const Section = styled.section`
  margin: ${p => p.theme.space[7]}px ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    margin: ${p.theme.space[5] + p.theme.space[7]}px ${p.theme.space[5]}px;
  `}
`;

const IntroSection = styled(Section)`
  margin-bottom: ${p => p.theme.space[8]}px;
  margin-top: ${p => p.theme.space[8]}px;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[8] + p.theme.space[7]}px;
    margin-top: ${p.theme.space[8] + p.theme.space[7]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-bottom: ${p.theme.space[9]}px;
    margin-top: ${p.theme.space[9]}px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const IntroContent = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${p => p.theme.media.tablet`
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  `}
`;

const Intro = styled.div`
  ${p => p.theme.media.tablet`
    margin-left: ${p.theme.space[4]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-left: ${p.theme.space[5]}px;
  `}
`;

const Greeting = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  margin: ${p => p.theme.space[2]}px 0 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
    margin-top: 0;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[6]}px;
  `}
`;

const Tagline = styled.p`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  margin: 0;
  max-width: 320px;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[3]}px;
    max-width: 480px;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[4]}px;
    max-width: 640px;
  `}
`;

const Heading = styled.h2`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
  `}
`;

const Post = styled.article`
  margin: ${p => p.theme.space[4]}px 0;
  max-width: 768px;
`;

const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0 0 ${p => p.theme.space[2]}px;
`;

const Excerpt = styled(Text)`
  color: ${p => p.theme.textColor2};
`;

const Home = () => {
  const data: HomeQuery = useStaticQuery(
    graphql`
      query Home {
        posts: allMdx(
          filter: {
            fileAbsolutePath: { glob: "**/src/posts/**" }
            frontmatter: { draft: { ne: true } }
          }
          limit: 3
          sort: { fields: frontmatter___date, order: DESC }
        ) {
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
        site {
          siteMetadata {
            description
          }
        }
      }
    `,
  );

  const tagline =
    data.site && data.site.siteMetadata && data.site.siteMetadata.description;

  const posts =
    (data.posts &&
      data.posts.nodes &&
      data.posts.nodes.map(({ fields, frontmatter, ...node }) => ({
        slug: fields && fields.slug,
        title: frontmatter && frontmatter.title,
        ...node,
      }))) ||
    [];

  return (
    <Layout>
      <SEO title="Home" />
      <IntroSection>
        <IntroContent>
          <Photo />
          <Intro>
            <Greeting>Hey there, I’m Glenn.</Greeting>
            {tagline && <Tagline>{tagline}</Tagline>}
          </Intro>
        </IntroContent>
      </IntroSection>
      <Section>
        <Content>
          <Heading>Blog.</Heading>
          {posts.map(({ excerpt, id, slug, title }) => (
            <Post key={id}>
              <Link to={slug}>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
              </Link>
            </Post>
          ))}
          <ArrowLink to="/blog/">View all posts</ArrowLink>
        </Content>
      </Section>
    </Layout>
  );
};

export default Home;
