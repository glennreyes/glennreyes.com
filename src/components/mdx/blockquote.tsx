import styled from 'styled-components';

const Blockquote = styled.blockquote`
  border-left: ${p => p.theme.borders[2]}px solid ${p => p.theme.borderColor};
  color: ${p => p.theme.textColor2};
  font-style: italic;
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[3]}px 0;
  padding-left: ${p => p.theme.space[3]}px;
`;

export default Blockquote;
