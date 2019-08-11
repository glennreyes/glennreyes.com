import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0] + p.theme.space[2] * 2}px;
  padding: 0 ${p => p.theme.space[2]}px;
`;

export default Content;
