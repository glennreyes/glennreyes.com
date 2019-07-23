import React from 'react';
import styled, { css } from 'styled-components';
import DefaultHeading from '../heading';
import useAnchor from '../../hooks/useAnchor';
import { ReactComponent as LinkSvg } from '../../icons/link.svg';
import { system } from '../../theme';

const AnchorIcon = styled(LinkSvg)``;

const Anchor = styled.a`
  color: ${p => p.theme.textColor2};
  opacity: 0;
  transition: opacity ${p => p.theme.transition};

  float: left;
  margin-left: -${p => p.theme.space[5]}px;

  &:focus {
    opacity: 1;
  }
`;

const Heading = ({ children, ...props }) => {
  const { handleClick, ref, slug } = useAnchor(children, {
    offset: system.space[7] + system.space[3],
  });

  return (
    <DefaultHeading
      css={css`
        &:hover > ${Anchor} {
          opacity: 1;
        }
      `}
      {...props}
      id={slug}
      ref={ref}
    >
      <Anchor aria-label={` permalink`} href={`#${slug}`} onClick={handleClick}>
        <AnchorIcon />
      </Anchor>
      {children}
    </DefaultHeading>
  );
};

export const H1 = styled(props => <Heading as="h1" {...props} />)`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H2 = styled(props => <Heading as="h2" {...props} />)`
  font-size: ${p => p.theme.fontSizes[4]}px;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[6]}px;
  `}
`;

// export const H2 = props => <div>{props.children}</div>;

export const H3 = styled(props => <Heading as="h3" {...props} />)`
  font-size: ${p => p.theme.fontSizes[3]}px;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[6]}px;
  `}
`;

export const H4 = styled(props => <Heading as="h4" {...props} />)`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const H5 = styled(props => <Heading as="h5" {...props} />)`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const H6 = styled(props => <Heading as="h6" {...props} />)`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;
