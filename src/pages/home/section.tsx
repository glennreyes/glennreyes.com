import styled from 'styled-components';

const Section = styled.section`
  margin: ${p => p.theme.space[7]}px ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    margin: ${p.theme.space[5] + p.theme.space[7]}px ${p.theme.space[5]}px;
  `}
`;

export default Section;
