import { RouteComponentProps } from '@reach/router';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Header from './header';
import Content from '../../components/content';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { PostQuery } from '../../types/generated/graphql';

type PostProps = RouteComponentProps & {
  data: PostQuery;
};

const Post = ({ data }: PostProps) => {
  const description = (data.mdx && data.mdx.excerpt) || undefined;
  const title =
    (data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.title) ||
    'Blog post';
  const body = data.mdx && data.mdx.body;

  return (
    <Layout>
      <SEO description={description} title={title} />
      <article
        itemProp="blogPosts"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <Header data={data} />
        <Content>{body && <MDXRenderer>{body}</MDXRenderer>}</Content>
      </article>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query Post($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        cover {
          photo {
            childImageSharp {
              fluid(maxHeight: 1920, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            name
            url
          }
        }
        date(formatString: "YYYY-MM-DD")
        dateFormatted: date(formatString: "MMM DD, YYYY")
        title
      }
      id
      timeToRead
    }
  }
`;
