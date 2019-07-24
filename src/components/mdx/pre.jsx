import styled from 'styled-components';

const Pre = styled.pre`
  border-radius: ${p => p.theme.radii[1]}px;
  overflow: auto;
  font: ${p => p.theme.fontSizes[1]}px / ${p => p.theme.lineHeights[2]}
    ${p => p.theme.fonts.mono};
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    margin-left: -${p => p.theme.space[3]}px;
    margin-right: -${p => p.theme.space[3]}px;
  `}
`;

export default Pre;
