import styled from 'styled-components';
import Section from './section';

const IntroSection = styled(Section)`
  margin-bottom: ${p => p.theme.space[8]}px;
  margin-top: ${p => p.theme.space[8]}px;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[8] + p.theme.space[7]}px;
    margin-top: ${p.theme.space[8] + p.theme.space[7]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-bottom: ${p.theme.space[9]}px;
    margin-top: ${p.theme.space[9]}px;
  `}
`;

export default IntroSection;
