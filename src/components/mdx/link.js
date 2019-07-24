import styled from 'styled-components';
import { inlineCodeStyles } from './code';
import DefaultLink from '../link';

const Link = styled(DefaultLink)`
  color: ${p => p.theme.linkColor};
  ${inlineCodeStyles}
`;

export default Link;
