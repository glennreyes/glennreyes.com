import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkModeContext from './dark-mode-context';
import Link from './Link';
import { HeaderQuery } from '../types/generated/graphql';

const Wrapper = styled.header`
  background: ${p => p.theme.headerBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  transition: ${p => p.theme.transition};
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

const MenuButton = styled.button``;

const TitleLink = styled(Link)`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
`;

const DarkModeButton = styled.button``;

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
  const { title } = data.site.siteMetadata;

  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <Wrapper>
      <Container>
        <MenuButton>Menu</MenuButton>
        <TitleLink to="/">{title}</TitleLink>
        <DarkModeButton onClick={() => toggleDarkMode()}>
          Switch to {darkMode ? 'light' : 'dark'} mode
        </DarkModeButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
