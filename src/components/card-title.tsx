import styled from 'styled-components';
import CardLink from './card-link';

const CardTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: 0 0 ${p => p.theme.space[2]}px;

  ${CardLink}:hover & {
    color: ${p => p.theme.colors.textSecondary};
  }
`;

export default CardTitle;
