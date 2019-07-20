import styled from 'styled-components';
import DefaultLink from '../link';

const Link = styled(DefaultLink)`
  color: ${p => p.theme.linkColor};
`;

export default Link;
