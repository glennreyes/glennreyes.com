import { GatsbyLinkProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Link from '../link';

const Wrapper = styled(Link)`
  align-items: center;
  background: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  text-align: center;
  transition: box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
    color: ${p => p.theme.colors.textSecondary};
  }

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[4]}px;
    padding: ${p.theme.space[3]}px ${p.theme.space[4]}px;
  `}
`;

type MoreLinkProps = GatsbyLinkProps<{}> & {
  children: React.ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const MoreLink = ({ children, icon, ref, ...props }: MoreLinkProps) => {
  const Icon = styled(icon)`
    color: ${p => p.theme.colors.icon};
    height: 64px;
    margin-bottom: 8px;
    width: 64px;
  `;

  return (
    <Wrapper {...props}>
      <Icon />
      {children}
    </Wrapper>
  );
};

export default MoreLink;
