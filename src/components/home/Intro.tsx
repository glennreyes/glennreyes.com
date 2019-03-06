import React, { useContext, useRef } from 'react';
import { Query } from 'react-apollo';
import { Flex } from 'rebass';
import IntroContainer from './IntroContainer';
import Heading from '../Heading';
import ScrollDown from './ScrollDown';
import SocialLinks from '../SocialLinks';
import Text from '../Text';
import { ThemeContext } from '../Theme';
import { getMe } from '../../graphql';
import { css } from '../../lib/styled-components';
import { GetMeQuery } from '../../typings/__generated__/graphql';

const Intro: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const container: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <IntroContainer ref={container}>
      <Query<GetMeQuery> query={getMe}>
        {({ data, loading }) => {
          if (loading || !data) return null;

          return (
            <>
              <Heading
                as="h1"
                color={darkMode ? 'lightGray' : 'blue'}
                fontSize={2}
              >
                {data.me.name}
              </Heading>
              <Text
                color={darkMode ? 'lightGray50' : 'blue50'}
                css={css`
                  text-align: center;
                `}
                lineHeight={2}
                mt={1}
              >
                {`Hi! I'm a ${data.me.job}`}
                <br />
                {'building things with React & GraphQL'}
              </Text>
              <Flex mt={5}>
                <SocialLinks />
              </Flex>
              <ScrollDown container={container} />
            </>
          );
        }}
      </Query>
    </IntroContainer>
  );
};

export default Intro;
