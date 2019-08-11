import styled from 'styled-components';
import UnorderedList from './unordered-list';

const OrderedList = styled.ol`
  margin: ${p => p.theme.space[2]}px 0;
  padding-left: ${p => p.theme.space[4]}px;

  & &,
  & ${UnorderedList}, ${UnorderedList} & {
    margin: 0;
  }
`;

export default OrderedList;
