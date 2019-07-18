import { graphql } from 'gatsby';
import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import Header from './header';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Post = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <Header post={post} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default Post;

export const query = graphql`
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
