import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ms from 'ms';
import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from 'styled-components';
import DefaultHeading from '../components/heading';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';
import DefaultText from '../components/text';

const Cover = styled(Img)`
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;

const Header = styled.div`
  align-items: stretch;
  ${p => (p.hasCover ? `background: ${p.theme.coverBg};` : '')}
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: flex-end;
  margin-bottom: ${p => p.theme.space[6]}px;
  position: relative;
  transition: background ${p => p.theme.transition};

  ${p => p.theme.media.tablet`
    height: 400px;
  `}
`;

const HeaderContentWrapper = styled.div`
  position: relative;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    padding: ${p => p.theme.space[5]}px 0;
  `}
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0]}px;
`;

const Heading = styled(DefaultHeading)`
  ${p => (p.hasCover ? `color: ${p.theme.coverHeading};` : '')}
`;

const HeaderText = styled(DefaultText)`
  color: ${p => (p.hasCover ? p.theme.coverMeta : p.theme.textColor2)};
  font-size: ${p => p.theme.fontSizes[1]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

const CoverAuthor = styled(DefaultText)`
  color: ${p => p.theme.coverMeta};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: ${p => p.theme.lineHeights[1]};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  position: absolute;
  right: 0;
  top: 100%;
  transition: color ${p => p.theme.transition};

  ${p => p.theme.media.tablet`
    bottom: 0;
    top: auto;
  `}
`;
const CoverAuthorLink = styled(Link)`
  color: inherit;
`;

const Post = ({ data }) => {
  const post = data.mdx;
  const hasCover = !!post.frontmatter.cover;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <Header hasCover={hasCover}>
        {post.frontmatter.cover && (
          <Cover
            fluid={post.frontmatter.cover.photo.childImageSharp.fluid}
            style={{ position: 'absolute' }}
          />
        )}
        <HeaderContentWrapper>
          <HeaderContent>
            <Heading hasCover={hasCover}>{post.frontmatter.title}</Heading>
            <HeaderText hasCover={hasCover}>
              {post.frontmatter.date} •{' '}
              {ms(post.timeToRead * 1000 * 60, { long: true })} read
            </HeaderText>
            {post.frontmatter.cover && post.frontmatter.cover.author && (
              <CoverAuthor>
                Photo by{' '}
                <CoverAuthorLink
                  target="_blank"
                  to={post.frontmatter.cover.author.url}
                >
                  {post.frontmatter.cover.author.name}
                </CoverAuthorLink>
              </CoverAuthor>
            )}
          </HeaderContent>
        </HeaderContentWrapper>
      </Header>
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
