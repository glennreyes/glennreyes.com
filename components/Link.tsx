import NextLink from 'next/link';
import React from 'react';
import { Link as BaseLink } from 'rebass';
import { css } from '../lib/styled-components';

type LinkProps = {
  children: React.ReactElement<any>;
  href: string;
  target?: '_blank';
  title?: string;
};

const Link: React.FC<LinkProps> = props => {
  if (props.href.startsWith('http')) {
    return (
      <BaseLink
        css={css`
          text-decoration: none;
        `}
        {...props}
      />
    );
  }

  return <NextLink {...props} />;
};

export default Link;
