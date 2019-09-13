import styled from 'styled-components';
import Text from './text';

const CardBody = styled(Text)`
  color: ${p => p.theme.colors.textSecondary};
  margin-top: ${p => p.theme.space[3]}px;
`;

export default CardBody;
