import styled from 'styled-components';

const CardGrid = styled.section`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px 0;
`;

export default CardGrid;
