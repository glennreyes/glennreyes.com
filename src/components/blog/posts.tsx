import { graphql, useStaticQuery } from 'gatsby';
import ms from 'ms';
import React from 'react';
import styled from 'styled-components';
import Link from '../link';
import Text from '../text';
import { BlogQuery } from '../../types/generated/graphql';

const Post = styled.article`
  margin: ${p => p.theme.space[5]}px 0;
`;

const PostLink = styled(Link)`
  background: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii[1]}px;
  padding: ${p => p.theme.space[3]}px;
  transition: box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
  }

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[5]}px;
  `}
`;

const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: 0 0 ${p => p.theme.space[2]}px;

  ${PostLink}:hover & {
    color: ${p => p.theme.colors.textSecondary};
  }
`;

const Meta = styled(Text)`
  color: ${p => p.theme.colors.textSecondary};
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
            fileAbsolutePath: { glob: "**/content/posts/**" }
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
        date: frontmatter && (frontmatter.date as string),
        dateFormatted: frontmatter && (frontmatter.dateFormatted as string),
        slug: fields && fields.slug,
        title: frontmatter && frontmatter.title,
        ...node,
      }))) ||
    [];

  return posts.map(
    ({ date, dateFormatted, excerpt, id, slug, title, ...post }) => {
      const timeToRead = post.timeToRead ? post.timeToRead * 1000 * 60 : null;

      if (!slug) return null;

      return (
        <Post key={id}>
          <PostLink to={slug}>
            <Title>{title}</Title>
            <Meta>
              {date && dateFormatted && (
                <time dateTime={date}>{dateFormatted}</time>
              )}
              {timeToRead && (
                <>
                  {date && dateFormatted && ' · '}
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
  );
};

export default Blog;
