import styled from 'styled-components';

const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: 0 0 ${p => p.theme.space[1]}px;
`;

export default Title;
