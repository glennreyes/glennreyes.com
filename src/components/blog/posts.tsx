import { graphql, useStaticQuery } from 'gatsby';
import ms from 'ms';
import React from 'react';
import styled from 'styled-components';
import Cards from '../cards';
import CardBody from '../card-body';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import Text from '../text';
import { BlogQuery } from '../../types/generated/graphql';

const Post = styled.article`
  display: flex;
  margin: ${p => p.theme.space[2]}px 0;
`;

const Meta = styled(Text)`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[1]}px;
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

  return (
    <Cards>
      {posts.map(
        ({ date, dateFormatted, excerpt, id, slug, title, ...post }) => {
          const timeToRead = post.timeToRead
            ? post.timeToRead * 1000 * 60
            : null;

          if (!slug) return null;

          return (
            <Post key={id}>
              <CardLink to={slug}>
                {title && <CardTitle>{title}</CardTitle>}
                {(date || timeToRead) && (
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
                )}
                {excerpt && <CardBody>{excerpt}</CardBody>}
              </CardLink>
            </Post>
          );
        },
      )}
    </Cards>
  );
};

export default Blog;
