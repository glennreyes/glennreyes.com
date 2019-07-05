import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useMedia } from 'use-media';
import DarkModeButton from './dark-mode-button';
import Link from './link';
import MenuButton from './menu-button';
import { MenuToggleProvider } from './menu-toggle-context';
import { breakpoints } from '../theme';
import { HeaderQuery } from '../types/generated/graphql';

const Wrapper = styled.header`
  background: ${p => p.theme.headerBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  transition: background ${p => p.theme.transition};

  ${p => p.theme.media.desktop`
    height: ${p.theme.space[6]}px;
  `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    margin-left: ${p.theme.space[4]}px;
    margin-right: ${p.theme.space[4]}px;
  `}
`;

const TitleLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[0]};

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[2]}px;
  `}
`;

const Header = () => {
  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const isDesktop = useMedia({ minWidth: breakpoints.desktop });

  return (
    <Wrapper>
      <Container>
        {!isDesktop && (
          <MenuToggleProvider>
            <MenuButton />
          </MenuToggleProvider>
        )}
        <TitleLink to="/">
          {data.site && data.site.siteMetadata && data.site.siteMetadata.title}
        </TitleLink>
        <DarkModeButton />
      </Container>
    </Wrapper>
  );
};

export default Header;
