import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Link from '../components/link';
import Photo from '../components/photo';
import SEO from '../components/seo';
import { HomeQuery } from '../types/generated/graphql';

const Section = styled.section`
  margin: 0 ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    margin-left: ${p.theme.space[5]}px;
    margin-right: ${p.theme.space[5]}px;
  `}
`;

const IntroSection = styled(Section)`
  padding: ${p => p.theme.space[6]}px 0;

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[7]}px 0;
  `}

  ${p => p.theme.media.desktop`
    padding: ${p.theme.space[8]}px 0;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
`;

const IntroContent = styled(Content)`
  align-items: center;
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

const Home = () => {
  const { allMdx, site }: HomeQuery = useStaticQuery(
    graphql`
      query Home {
        allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            excerpt
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

  const tagline = site && site.siteMetadata && site.siteMetadata.description;

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
          <h2>Blog.</h2>
          {posts.map(({ excerpt, id, slug, title }) => (
            <article key={id}>
              <Link to={slug}>
                <h3>{title}</h3>
                <p>{excerpt}</p>
              </Link>
            </article>
          ))}
          <Link to="/blog">View all posts</Link>
        </Content>
      </Section>
    </Layout>
  );
};

export default Home;
