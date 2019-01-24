import React from 'react';
import { Flex } from 'rebass';
import { H1 } from '../Heading';
import ScrollDown from '../ScrollDown';
import SocialLinks from '../SocialLinks';
import Text from '../Text';
import { Me } from '../../data/me';
import { css } from '../../lib/styled-components';

type IntroProps = {
  me: Me;
};

const Intro: React.FunctionComponent<IntroProps> = ({ me }) => (
  <Flex
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    css={css`
      background: linear-gradient(
        to right,
        ${props => props.theme.colors.white},
        ${props => props.theme.colors.lightGray}
      );
      height: 100%;
      position: relative;
    `}
  >
    <H1>{me.name}</H1>
    <Text
      color="blue50"
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
  </Flex>
);

export default Intro;
