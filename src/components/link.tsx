import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Link = styled(
  ({
    activeClassName,
    activeStyle,
    children,
    innerRef,
    partiallyActive,
    replace,
    ref,
    target,
    to,
    ...other
  }: GatsbyLinkProps<{}>) => {
    const isInternal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (isInternal) {
      return (
        <GatsbyLink
          activeClassName={activeClassName}
          activeStyle={activeStyle}
          innerRef={innerRef}
          partiallyActive={partiallyActive}
          replace={replace}
          to={to}
          {...other}
        >
          {children}
        </GatsbyLink>
      );
    }

    return (
      <a ref={ref} href={to} target={target} {...other}>
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
