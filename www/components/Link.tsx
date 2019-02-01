import NextLink from 'next/link';
import React from 'react';
import { Link as BaseLink } from 'rebass';
import { css } from '../lib/styled-components';

type LinkProps = {
  color?: string;
  css?: Object;
  darkMode?: boolean;
  href: string;
  ml?: string | number;
  target?: '_blank';
  title?: string;
};

const Link: React.FC<LinkProps> = ({ children, color, ml, ...props }) => {
  if (props.href.startsWith('http')) {
    return (
      <BaseLink
        color={color}
        css={css`
          display: flex;
          text-decoration: none;
        `}
        ml={ml}
        {...props}
      >
        {children}
      </BaseLink>
    );
  }

  return (
    <NextLink {...props}>
      <a>{children as React.ReactElement<any>}</a>
    </NextLink>
  );
};

export default Link;
