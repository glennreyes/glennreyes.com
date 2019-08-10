import Img, { FluidObject } from 'gatsby-image';
import ms from 'ms';
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../components/mdx/headings';
import Link from '../../components/link';
import Text from '../../components/text';
import { ReactComponent as Camera } from '../../icons/camera.svg';
import { PostQuery } from '../../types/generated/graphql';

const Wrapper = styled.header<{ hasCover: boolean }>`
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
    padding: ${p.theme.space[5]}px 0;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0]}px;
`;

const Heading = styled(({ hasCover, ...props }) => <H1 {...props} />)`
  ${p => (p.hasCover ? `color: ${p.theme.coverHeading};` : '')}
  margin-top: 0;
`;

const Meta = styled(Text)<{ hasCover: boolean }>`
  color: ${p => (p.hasCover ? p.theme.coverMeta : p.theme.textColor2)};
  font-size: ${p => p.theme.fontSizes[1]}px;
`;

const Cover = styled(Img)`
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;

const CoverAuthorLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.coverMeta};
  display: flex;
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

const CameraIcon = styled(Camera)`
  height: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[1]}px;
  width: ${p => p.theme.space[3]}px;
`;

type HeaderProps = {
  data: PostQuery;
};

const Header = ({ data }: HeaderProps) => {
  const post = data.mdx;

  if (!(post && post.frontmatter)) {
    return null;
  }

  const { cover, date, title } = post.frontmatter;
  const hasCover = !!cover;

  const fluid =
    cover &&
    cover.photo &&
    cover.photo.childImageSharp &&
    (cover.photo.childImageSharp.fluid as FluidObject);

  const authorName = cover && cover.author && cover.author.name;
  const authorUrl = cover && cover.author && cover.author.url;

  return (
    <Wrapper hasCover={hasCover}>
      {fluid && <Cover fluid={fluid} style={{ position: 'absolute' }} />}
      <ContentWrapper>
        <Content>
          <Heading hasCover={hasCover}>{title}</Heading>
          <Meta hasCover={hasCover}>
            {date}
            {post.timeToRead
              ? ` · ${ms(post.timeToRead * 1000 * 60, { long: true })} read`
              : ''}
          </Meta>
          {authorName && authorUrl ? (
            <CoverAuthorLink target="_blank" to={authorUrl}>
              <CameraIcon />
              {authorName}
            </CoverAuthorLink>
          ) : authorName ? (
            <>
              <CameraIcon />
              {authorName}
            </>
          ) : null}
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
