import styled from 'styled-components';
import UnorderedList from './unordered-list';

const OrderedList = styled.ol`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & &,
  & ${UnorderedList}, ${UnorderedList} & {
    margin: 0;
  }
`;

export default OrderedList;
