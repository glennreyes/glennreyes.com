import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Content from './content';
import Excerpt from './excerpt';
import Greeting from './greeting';
import Heading from './heading';
import Intro from './intro';
import IntroContent from './intro-content';
import IntroSection from './intro-section';
import Post from './post';
import Section from './section';
import Tagline from './tagline';
import Title from './title';
import ArrowLink from '../../components/arrow-link';
import Layout from '../../components/layout';
import Link from '../../components/link';
import Photo from '../../components/photo';
import SEO from '../../components/seo';
import { HomeQuery } from '../../types/generated/graphql';

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
          {posts.length > 3 && (
            <ArrowLink to="/blog/">View all posts</ArrowLink>
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Home;
