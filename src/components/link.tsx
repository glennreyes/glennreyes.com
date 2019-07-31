import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Link = styled(
  ({ children, to, activeClassName, partiallyActive, ...other }) => {
    const isInternal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (isInternal) {
      return (
        <GatsbyLink
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          to={to}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }

    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  },
)`
  color: ${p => p.theme.textColor};
  display: inline-block;
  text-decoration: none;
`;

export default Link;
