import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  overflow: auto;
  width: 100%;
`;

export const TableHeader = styled.th`
  border: 1px solid ${p => p.theme.borderColor};
  font-weight: ${p => p.theme.fontWeights[1]};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
`;

export const TableCell = styled.td`
  border: 1px solid ${p => p.theme.borderColor};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
`;

export default Table;
