import styled from 'styled-components';
import Link from '../link';

const PostLink = styled(Link)`
  &:hover {
    color: ${p => p.theme.colors.textSecondary};
  }
`;

export default PostLink;
