import React from 'react';
import styled from 'styled-components';
import DefaultLink from '../link';

const Wrapper = styled.h2`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[4]}px 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
  `}
`;

const Link = styled(DefaultLink)`
  color: inherit;
`;

type HeadingProps = {
  children: React.ReactNode;
  to?: string;
};

const Heading = ({ children, to }: HeadingProps) => (
  <Wrapper>{to ? <Link to={to}>{children}</Link> : children}.</Wrapper>
);

export default Heading;
