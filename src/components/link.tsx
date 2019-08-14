import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

type LinkProps = GatsbyLinkProps<{}>;

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
  }: LinkProps) => {
    const isPathToStaticFolder = to.startsWith('/static');
    const isInternal = /^\/(?!\/)/.test(to) && !isPathToStaticFolder;

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
      // rel="noopener" to prevent the new page from being able to access window.opener property
      // https://developers.google.com/web/tools/lighthouse/audits/noopener
      <a ref={ref} href={to} rel="noopener" target={target} {...other}>
        {children}
      </a>
    );
  },
)`
  color: ${p => p.theme.colors.text};
  display: inline-block;
  outline: none;
  text-decoration: none;
`;

export default Link;
