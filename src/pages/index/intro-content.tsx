import styled from 'styled-components';
import Content from './content';

const IntroContent = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${p => p.theme.media.tablet`
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  `}
`;

export default IntroContent;
