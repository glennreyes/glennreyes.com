import styled from 'styled-components';
import Section from './section';

const IntroSection = styled(Section)`
  margin-bottom: ${p => p.theme.space[7]}px;
  margin-top: ${p => p.theme.space[7]}px;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[7] + p.theme.space[6]}px;
    margin-top: ${p.theme.space[7] + p.theme.space[6]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-bottom: ${p.theme.space[8]}px;
    margin-top: ${p.theme.space[8]}px;
  `}
`;

export default IntroSection;
