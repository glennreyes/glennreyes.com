import React from 'react';
import styled from 'styled-components';
import Link from './link';
import { ReactComponent as ArrowRightSvg } from '../icons/arrow-right.svg';

const ArrowRight = styled(ArrowRightSvg)`
  transition: transform ${p => p.theme.transition};
`;

const ArrowLink = styled(({ children, ...props }) => (
  <Link {...props}>
    {children}
    <ArrowRight />
  </Link>
))`
  align-items: center;
  display: inline-flex;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[2]};

  &:hover > ${ArrowRight} {
    transform: translateX(${p => p.theme.space[0]}px);
  }
`;

export default ArrowLink;
