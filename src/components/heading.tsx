import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0;
`;

export default Heading;
