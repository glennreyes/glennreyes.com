import Img from 'gatsby-image';
import ms from 'ms';
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../components/heading';
import Link from '../../components/link';
import Text from '../../components/text';

const Wrapper = styled.header`
  align-items: stretch;
  ${p => (p.hasCover ? `background: ${p.theme.coverBg};` : '')}
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: flex-end;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  transition: background ${p => p.theme.transition};

  ${p => p.theme.media.tablet`
  height: 400px;
`}
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
  padding: ${p => p.theme.space[5]}px 0;
`}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0]}px;
`;

const Heading = styled(H1)`
  ${p => (p.hasCover ? `color: ${p.theme.coverHeading};` : '')}
  margin-top: 0;
`;

const Meta = styled(Text)`
  color: ${p => (p.hasCover ? p.theme.coverMeta : p.theme.textColor2)};
  font-size: ${p => p.theme.fontSizes[1]}px;
`;

const Cover = styled(Img)`
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;

const CoverAuthor = styled(Text)`
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

const Header = ({ post }) => {
  const hasCover = !!post.frontmatter.cover;

  return (
    <Wrapper hasCover={hasCover}>
      {post.frontmatter.cover && (
        <Cover
          fluid={post.frontmatter.cover.photo.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />
      )}
      <ContentWrapper>
        <Content>
          <Heading hasCover={hasCover}>{post.frontmatter.title}</Heading>
          <Meta hasCover={hasCover}>
            {post.frontmatter.date} •{' '}
            {ms(post.timeToRead * 1000 * 60, { long: true })} read
          </Meta>
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
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
