import { GatsbyLinkProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Link from '../../components/link';

const Wrapper = styled(Link)`
  align-items: center;
  background: ${p => p.theme.cardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  text-align: center;
  transition: box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.boxShadow[0]};
  }

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[4]}px;
    padding: ${p.theme.space[4]}px ${p.theme.space[5]}px;
  `}
`;

type MoreLinkProps = GatsbyLinkProps<{}> & {
  children: React.ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const MoreLink = ({ children, icon, ...props }: MoreLinkProps) => {
  const Icon = styled(icon)`
    margin-bottom: 8px;
  `;
  return (
    <Wrapper {...props}>
      <Icon />
      {children}
    </Wrapper>
  );
};

export default MoreLink;
