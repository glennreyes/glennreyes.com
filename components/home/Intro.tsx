import React, { useContext } from 'react';
import { Flex } from 'rebass';
import IntroContainer from './IntroContainer';
import Heading from '../Heading';
import ScrollDown from './ScrollDown';
import ThemeSwitch from './ThemeSwitch';
import SocialLinks from '../SocialLinks';
import Text from '../Text';
import { ThemeContext } from '../Theme';
import { Me } from '../../data/me';
import { css } from '../../lib/styled-components';

type IntroProps = {
  me: Me;
};

const Intro: React.FC<IntroProps> = ({ me }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <IntroContainer>
      <Heading as="h1" color={darkMode ? 'lightGray' : 'blue'} fontSize={2}>
        {me.name}
      </Heading>
      <Text
        color={darkMode ? 'lightGray50' : 'blue50'}
        css={css`
          text-align: center;
        `}
        lineHeight={2}
        mt={1}
      >
        {`Hi! I'm a ${me.job}`}
        <br />
        {'building things with React & GraphQL'}
      </Text>
      <Flex mt={5}>
        <SocialLinks me={me} />
      </Flex>
      <ScrollDown />
      <ThemeSwitch />
    </IntroContainer>
  );
};

export default Intro;
