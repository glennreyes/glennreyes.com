import styled from 'styled-components';

const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin: 0;
`;

export default Text;
