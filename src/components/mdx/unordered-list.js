import styled from 'styled-components';

const UnorderedList = styled.ul`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & & {
    margin: 0;
  }
`;

export default UnorderedList;
