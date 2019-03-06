import { Link as RawLink } from '@reach/router';
import React from 'react';
import { Link as BaseLink, LinkProps as BaseLinkProps } from 'rebass';
import { css } from '../lib/styled-components';

type LinkProps = {
  darkMode?: boolean;
  href?: string;
  to?: string;
  target?: string;
};

const Link: React.FC<LinkProps & BaseLinkProps> = ({ href, ...props }) => {
  if (href && href.startsWith('http')) {
    return (
      <BaseLink
        css={css`
          display: flex;
          text-decoration: none;
          transition: ${props => props.theme.transitions[0]};
        `}
        href={href}
        {...props}
      />
    );
  }

  return (
    <BaseLink
      as={RawLink}
      css={css`
        display: flex;
        text-decoration: none;
        transition: ${props => props.theme.transitions[0]};
      `}
      to={href}
      {...props}
    />
  );
};

export default Link;
