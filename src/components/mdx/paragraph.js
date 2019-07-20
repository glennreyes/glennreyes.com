import styled from 'styled-components';
import Text from '../text';

const Paragraph = styled(Text)`
  margin-bottom: ${p => p.theme.space[5]}px;

  > code {
    background: ${p => p.theme.codeBg};
    color: ${p => p.theme.codeColor};
    font-family: ${p => p.theme.fonts.mono};

    // Copied from github.com
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }
`;

export default Paragraph;
