import styled from 'styled-components';
import Link from '../link';

const PostLink = styled(Link)`
  &:hover {
    color: ${p => p.theme.textColor2};
  }
`;

export default PostLink;
