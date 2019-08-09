import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Content from './home/content';
import Excerpt from './home/excerpt';
import Greeting from './home/greeting';
import Heading from './home/heading';
import Intro from './home/intro';
import IntroContent from './home/intro-content';
import IntroSection from './home/intro-section';
import MoreLink from './home/more-link';
import MoreLinks from './home/more-links';
import Post from './home/post';
import Section from './home/section';
import Tagline from './home/tagline';
import Title from './home/title';
import ArrowLink from '../components/arrow-link';
import Layout from '../components/layout';
import Link from '../components/link';
import Photo from '../components/photo';
import SEO from '../components/seo';
import { ReactComponent as Book } from '../icons/book.svg';
import { ReactComponent as Film } from '../icons/film.svg';
import { ReactComponent as Headphones } from '../icons/headphones.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as PaperPlane } from '../icons/paper-plane.svg';
import { ReactComponent as Person } from '../icons/person.svg';
import { HomeQuery } from '../types/generated/graphql';

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

  const moreLinks = [
    {
      icon: Film,
      label: 'Speaking',
      url: '/talks/',
    },
    {
      icon: Book,
      label: 'Reading',
      url: '/reading/',
    },
    {
      icon: Heart,
      label: 'OSS',
      url: '/oss/',
    },
    {
      icon: Headphones,
      label: 'Uses',
      url: '/uses/',
    },
    {
      icon: Person,
      label: 'About',
      url: '/about/',
    },
    {
      icon: PaperPlane,
      label: 'Contact',
      url: '/contact/',
    },
  ];

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
      <Section>
        <Content>
          <Heading>More.</Heading>
          <MoreLinks>
            {moreLinks.map(({ icon, label, url }) => (
              <MoreLink icon={icon} key={label.toLowerCase()} to={url}>
                {label}
              </MoreLink>
            ))}
          </MoreLinks>
        </Content>
      </Section>
    </Layout>
  );
};

export default Home;
