import styled from 'styled-components';

const Greeting = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bolder};
  margin: ${p => p.theme.space[1]}px 0 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
    margin-top: 0;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[6]}px;
  `}
`;

export default Greeting;
