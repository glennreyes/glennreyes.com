import React from 'react';
import styled from 'styled-components';
import { inlineCodeStyles } from './code';
import { H1, H2, H3, H4, H5, H6 } from './headings';
import DefaultLink from '../link';

const Link = styled(({ href, ...props }) => (
  <DefaultLink target="_blank" to={href} {...props} />
))`
  color: ${p => p.theme.colors.link};
  ${inlineCodeStyles}

  ${p => p.theme.media.print`
    color: ${p.theme.colors.text};

    &::after {
      content: " (" attr(href) ") ";
    }

    ${H1} &,
    ${H2} &,
    ${H3} &,
    ${H4} &,
    ${H5} &,
    ${H6} & {
      &::after {
        content: attr(href);
        display: block;
        font-size: ${p.theme.fontSizes[2]}px;
        font-weight: ${p.theme.fontWeights.normal};
      }
    }
  `}
`;

export default Link;
