import React, { useContext } from 'react';
import { Flex } from 'rebass';
import Container from './Container';
import { H1 } from '../Heading';
import ScrollDown from './ScrollDown';
import ThemeSwitch from './ThemeSwitch';
import SocialLinks from '../SocialLinks';
import Text from '../Text';
import { ThemeContext } from '../Theme';
import { Me } from '../../data/me';
import { css } from '../../lib/styled-components';

interface IntroProps {
  me: Me;
}

const Intro: React.FC<IntroProps> = ({ me }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container>
      <H1>{me.name}</H1>
      <Text
        color={darkMode ? 'lightGray50' : 'blue50'}
        css={css`
          text-align: center;
        `}
        mt={1}
      >
        {`Hi! I'm a ${me.job}`}
        <br />
        {'building things with React & GraphQL'}
      </Text>
      <Flex mt={4}>
        <SocialLinks me={me} />
      </Flex>
      <ScrollDown />
      <ThemeSwitch />
    </Container>
  );
};

export default Intro;
