import { graphql } from 'gatsby';
import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Post = props => {
  const post = props.data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      Hello World
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
        title
        date(formatString: "MMMM DD, YYYY")
      }
      id
    }
  }
`;
