import styled from 'styled-components';
import Text from '../text';

const Excerpt = styled(Text)`
  color: ${p => p.theme.colors.textSecondary};
`;

export default Excerpt;
