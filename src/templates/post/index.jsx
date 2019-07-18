import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import Header from './header';
import { H1, H2, H3, H4, H5, H6 } from '../../components/heading';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Post = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <Header post={post} />
      <MDXProvider
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
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
