import { graphql, useStaticQuery } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import ArrowLink from '../components/arrow-link';
import Card from '../components/card';
import CardBody from '../components/card-body';
import CardLink from '../components/card-link';
import CardTitle from '../components/card-title';
import CardGrid from '../components/home/card-grid';
import Content from '../components/home/content';
import Excerpt from '../components/home/excerpt';
import Greeting from '../components/home/greeting';
import Heading from '../components/home/heading';
import Intro from '../components/home/intro';
import IntroContent from '../components/home/intro-content';
import IntroSection from '../components/home/intro-section';
import MoreLink from '../components/home/more-link';
import MoreLinks from '../components/home/more-links';
import Post from '../components/home/post';
import PostLink from '../components/home/post-link';
import Section from '../components/home/section';
import Tagline from '../components/home/tagline';
import Title from '../components/home/title';
import Layout from '../components/layout';
import Paragraph from '../components/mdx/paragraph';
import Photo from '../components/photo';
import SEO from '../components/seo';
import { ReactComponent as Book } from '../icons/book.svg';
import { ReactComponent as Film } from '../icons/film.svg';
import { ReactComponent as Headphones } from '../icons/headphones.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as PaperPlane } from '../icons/paper-plane.svg';
import { ReactComponent as Person } from '../icons/person.svg';
import { HomeQuery } from '../types/generated/graphql';

const moreLinks = [
  {
    icon: Film,
    label: 'Speaking',
    url: '/talks/',
  },
  {
    icon: Book,
    label: 'Reading',
    url: '/books/',
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

type HomeProps = RouteComponentProps;

const Home = ({ path }: HomeProps) => {
  const data: HomeQuery = useStaticQuery(
    graphql`
      query Home {
        posts: allMdx(
          filter: {
            fileAbsolutePath: { glob: "**/content/posts/**" }
            frontmatter: { draft: { ne: true } }
          }
          limit: 3
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            excerpt(pruneLength: 140)
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
        workshops: allWorkshop(sort: { fields: createdAt, order: DESC }) {
          nodes {
            body
            description
            id
            slug
            title
          }
        }
      }
    `,
  );

  const tagline =
    data.site && data.site.siteMetadata && data.site.siteMetadata.description;

  const posts =
    (data.posts.nodes &&
      data.posts.nodes.map(({ fields, frontmatter, ...node }) => ({
        slug: fields && fields.slug,
        title: frontmatter && frontmatter.title,
        ...node,
      }))) ||
    [];

  return (
    <Layout path={path}>
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
          {posts.map(
            ({ excerpt, id, slug, title }) =>
              slug && (
                <Post key={id}>
                  <PostLink to={slug}>
                    <Title>{title}</Title>
                    <Excerpt>{excerpt}</Excerpt>
                  </PostLink>
                </Post>
              ),
          )}
          <ArrowLink to="/blog/">View all posts</ArrowLink>
        </Content>
      </Section>
      <Section>
        <Content>
          <Heading>Workshops.</Heading>
          <CardGrid>
            {data.workshops.nodes.map(({ description, id, slug, title }) => (
              <Card as="article" key={id}>
                {title && (
                  <CardTitle>
                    <CardLink to={slug}>{title}</CardLink>
                  </CardTitle>
                )}
                {description && (
                  <CardBody as="div">
                    <Paragraph>{description}</Paragraph>
                  </CardBody>
                )}
              </Card>
            ))}
          </CardGrid>
          <ArrowLink to="/workshops/">View all workshops</ArrowLink>
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
