import { graphql, useStaticQuery } from 'gatsby';
import ms from 'ms';
import React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';
import Text from '../components/text';
import { BlogQuery } from '../types/generated/graphql';

const Section = styled.section`
  margin: ${p => p.theme.space[7]}px 0;

  ${p => p.theme.media.tablet`
    margin: ${p.theme.space[5] + p.theme.space[7]}px 0;
  `}
`;

const Post = styled.article`
  background: ${p => p.theme.cardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  margin: ${p => p.theme.space[5]}px 0;
  max-width: 768px;
  transition: box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.boxShadow[0]};
  }
`;

const PostLink = styled(Link)`
  padding: ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[5]}px;
  `}
`;

const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0 0 ${p => p.theme.space[2]}px;
`;

const Meta = styled(Text)`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[1]}px;
`;

const Excerpt = styled(Text)`
  margin-top: ${p => p.theme.space[3]}px;
`;

const Blog = () => {
  const data: BlogQuery = useStaticQuery(
    graphql`
      query Blog {
        posts: allMdx(
          filter: {
            fileAbsolutePath: { glob: "**/src/posts/**" }
            frontmatter: { draft: { ne: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            excerpt(pruneLength: 280)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              dateFormatted: date(formatString: "MMM DD, YYYY")
              title
            }
            id
            timeToRead
          }
        }
      }
    `,
  );

  const posts =
    (data.posts &&
      data.posts.nodes &&
      data.posts.nodes.map(({ fields, frontmatter, ...node }) => ({
        date: frontmatter && frontmatter.date,
        dateFormatted: frontmatter && frontmatter.dateFormatted,
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
          {posts.map(
            ({ date, dateFormatted, excerpt, id, slug, title, ...post }) => {
              const timeToRead = post.timeToRead
                ? post.timeToRead * 1000 * 60
                : null;

              return (
                <Post key={id}>
                  <PostLink to={slug}>
                    <Title>{title}</Title>
                    <Meta>
                      <time dateTime={date}>{dateFormatted}</time>
                      {timeToRead && (
                        <>
                          {' · '}
                          <time dateTime={ms(timeToRead)}>
                            {ms(timeToRead, { long: true })}
                          </time>
                          {' read'}
                        </>
                      )}
                    </Meta>
                    <Excerpt>{excerpt}</Excerpt>
                  </PostLink>
                </Post>
              );
            },
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Blog;
