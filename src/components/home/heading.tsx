import styled from 'styled-components';

const Heading = styled.h2`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[4]}px 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
  `}
`;

export default Heading;
