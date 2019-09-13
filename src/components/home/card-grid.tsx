import styled from 'styled-components';
import DefaultCardGrid from '../card-grid';

const CardGrid = styled(DefaultCardGrid)`
  ${p => p.theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export default CardGrid;
