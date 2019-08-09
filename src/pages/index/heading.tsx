import styled from 'styled-components';

const Heading = styled.h2`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
  `}
`;

export default Heading;
