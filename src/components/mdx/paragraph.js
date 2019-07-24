import styled from 'styled-components';
import { inlineCodeStyles } from './code';
import Text from '../text';

const Paragraph = styled(Text)`
  margin-bottom: ${p => p.theme.space[5]}px;
  ${inlineCodeStyles}
`;

export default Paragraph;
