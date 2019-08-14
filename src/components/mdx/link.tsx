import React from 'react';
import styled from 'styled-components';
import { inlineCodeStyles } from './code';
import DefaultLink from '../link';

const Link = styled(({ href, ...props }) => (
  <DefaultLink target="_blank" to={href} {...props} />
))`
  color: ${p => p.theme.colors.link};
  ${inlineCodeStyles}
`;

export default Link;
