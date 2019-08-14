import styled from 'styled-components';
import Text from './text';

const CardBody = styled(Text)`
  margin-top: ${p => p.theme.space[3]}px;
`;

export default CardBody;
