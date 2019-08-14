import styled from 'styled-components';
import DefaultLink from './link';

const CardLink = styled(DefaultLink)`
  &:hover {
    color: ${p => p.theme.colors.textSecondary};
  }

  &::before {
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export default CardLink;
