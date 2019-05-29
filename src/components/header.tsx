import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import DarkModeContext from './dark-mode-context';
import { HeaderQuery } from '../types/generated/graphql';

const Container = styled.header`
  background: ${p => p.theme.headerBg};
  height: ${p => p.theme.space[5]}px;
  transition: ${p => p.theme.transition};
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
  const { title } = data.site.siteMetadata;

  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <Container>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">{title}</Link>
        </h1>
        <button onClick={() => toggleDarkMode()}>
          Switch to {darkMode ? 'light' : 'dark'} mode
        </button>
      </div>
    </Container>
  );
};

export default Header;
