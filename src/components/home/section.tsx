import styled from 'styled-components';

const Section = styled.section`
  margin: ${p => p.theme.space[6]}px ${p => p.theme.space[2]}px;

  ${p => p.theme.media.tablet`
    margin: ${p.theme.space[4] + p.theme.space[6]}px ${p.theme.space[4]}px;
  `}
`;

export default Section;
