import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { H1, H2, H3, H4, H5, H6 } from '../../components/heading';
import Layout from '../../components/layout';
import Link from '../../components/link';
import SEO from '../../components/seo';
import Text from '../../components/text';

const Break = styled.hr`
  background: ${p => p.theme.borderColor};
  border: none;
  height: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[6]}px;
    margin-top: ${p.theme.space[6]}px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0] + p.theme.space[3] * 2}px;
  padding: 0 ${p => p.theme.space[3]}px;
`;

const Paragraph = styled(Text)`
  margin-bottom: ${p => p.theme.space[5]}px;

  > code {
    background: ${p => p.theme.codeBg};
    color: ${p => p.theme.codeColor};
    font-family: ${p => p.theme.fonts.mono};

    // Copied from github.com
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }
`;

const ListItem = props => <Text {...props} as="li" />;

const UnorderedList = styled.ul`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & & {
    margin: 0;
  }
`;

const OrderedList = styled.ol`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & &,
  & ${UnorderedList}, ${UnorderedList} & {
    margin: 0;
  }
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
          <MDXProvider
            components={{
              a: Link,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              hr: Break,
              li: ListItem,
              ol: OrderedList,
              p: Paragraph,
              ul: UnorderedList,
            }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </article>
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
