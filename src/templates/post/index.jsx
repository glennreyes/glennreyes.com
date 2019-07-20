import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0] + p.theme.space[3] * 2}px;
  padding: 0 ${p => p.theme.space[3]}px;
`;

const Post = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <article
        itemProp="blogPosts"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <Header post={post} />
        <Content>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Content>
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
        date(formatString: "MMM DD, YYYY")
        draft
        title
      }
      id
      timeToRead
    }
  }
`;
