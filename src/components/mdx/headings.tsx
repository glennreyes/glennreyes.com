import React from 'react';
import styled, { css } from 'styled-components';
import { inlineCodeStyles } from './code';
import useAnchor from '../../hooks/useAnchor';
import { ReactComponent as LinkSvg } from '../../icons/link.svg';
import { system } from '../../theme';

const Anchor = styled.a`
  align-items: center;
  color: ${p => p.theme.textColor2};
  display: flex;
  // Matches font-size + line-height of the header
  height: calc(1em * ${p => p.theme.lineHeights[1]});
  opacity: 0;
  transition: opacity ${p => p.theme.transition};

  float: left;
  margin-left: -${p => p.theme.space[5]}px;

  &:focus {
    opacity: 1;
  }
`;

const AnchorIcon = styled(LinkSvg)`
  // height: 20px;
  // width: 20px;
`;

const defaultHeadingStyles = css`
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: ${p => p.theme.space[5]}px 0 ${p => p.theme.space[3]}px;
  ${inlineCodeStyles}

  &:hover > ${Anchor} {
    opacity: 1;
  }
`;

const Wrapper = styled.div``;

type HeadingWithAnchorProps = {
  children?: React.ReactNode;
};

const HeadingWithAnchor = ({ children, ...props }: HeadingWithAnchorProps) => {
  const { handleClick, ref, slug } = useAnchor(children, {
    offset: system.space[7],
  });

  return (
    <Wrapper {...props} id={slug} ref={ref}>
      <Anchor
        aria-label={`${slug} permalink`}
        href={`#${slug}`}
        onClick={handleClick}
      >
        <AnchorIcon />
      </Anchor>
      {children}
    </Wrapper>
  );
};

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = ({ as: As, ...props }: HeadingProps) => {
  if (As === 'h1') {
    return <As {...props} />;
  }

  return <HeadingWithAnchor {...props} />;
};

export const H1 = styled(props => <Heading as="h1" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H2 = styled(props => <Heading as="h2" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[4]}px;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H3 = styled(props => <Heading as="h3" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[3]}px;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H4 = styled(props => <Heading as="h4" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[2]}px;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H5 = styled(props => <Heading as="h5" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const H6 = styled(props => <Heading as="h6" {...props} />)`
  ${defaultHeadingStyles}
  font-size: ${p => p.theme.fontSizes[2]}px;
`;
