import styled from 'styled-components';

const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0 0 ${p => p.theme.space[2]}px;
`;

export default Title;
