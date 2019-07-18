import styled from 'styled-components';

const Heading = styled.div`
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0;
`;

export const H1 = styled(Heading).attrs({ as: 'h1' })`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
  `}
`;

export const H2 = styled(Heading).attrs({ as: 'h2' })`
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const H3 = styled(Heading).attrs({ as: 'h3' })`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const H4 = styled(Heading).attrs({ as: 'h4' })`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const H5 = styled(Heading).attrs({ as: 'h5' })`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const H6 = styled(Heading).attrs({ as: 'h5' })`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export default Heading;
