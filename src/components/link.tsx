import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Link = styled(GatsbyLink)`
  color: ${p => p.theme.textColor};
  text-decoration: none;
  transition: color ${p => p.theme.transition};
`;

export default Link;
