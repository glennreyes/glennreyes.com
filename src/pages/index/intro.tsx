import styled from 'styled-components';

const Intro = styled.div`
  ${p => p.theme.media.tablet`
    margin-left: ${p.theme.space[4]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-left: ${p.theme.space[5]}px;
  `}
`;

export default Intro;
