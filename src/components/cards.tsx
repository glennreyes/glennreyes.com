import styled from 'styled-components';
import CardGrid from './card-grid';

const Cards = styled(CardGrid)`
  margin: ${p => p.theme.space[5]}px 0;
`;

export default Cards;
