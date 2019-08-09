import styled from 'styled-components';

const MoreLink = styled.div`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  grid-template-columns: repeat(2, 1fr);

  ${p => p.theme.media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export default MoreLink;
