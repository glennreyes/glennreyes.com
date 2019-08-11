import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  margin: ${p => p.theme.space[3]}px 0;
  overflow: auto;
  width: 100%;
`;

export const TableHeader = styled.th`
  border: ${p => p.theme.borders[0]}px solid ${p => p.theme.borderColor};
  font-weight: ${p => p.theme.fontWeights[1]};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
`;

export const TableCell = styled.td`
  border: ${p => p.theme.borders[0]}px solid ${p => p.theme.borderColor};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
`;

export default Table;
