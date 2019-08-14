import styled from 'styled-components';
import DefaultLink from './link';

const CardLink = styled(DefaultLink)`
  background: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii[1]}px;
  padding: ${p => p.theme.space[3]}px;
  transition: box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
  }

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[5]}px;
  `}
`;

export default CardLink;
