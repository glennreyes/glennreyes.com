import styled from 'styled-components';

const Tagline = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0;
  max-width: 320px;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[3]}px;
    max-width: 480px;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[4]}px;
    max-width: 640px;
  `}
`;

export default Tagline;
