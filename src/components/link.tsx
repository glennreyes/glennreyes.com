import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const Link = styled(GatsbyLink)`
  color: ${p => p.theme.textColor};
  text-decoration: none;
  transition: color ${p => p.theme.transition};

  ${p => p.theme.media.desktop`
    &:hover {
      color: ${p.theme.activeTextColor};
    }
  `}
`;

export default Link;
