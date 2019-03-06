import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Box, Flex } from 'rebass';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Talks from '../components/talks/Talks';
import { getMe } from '../graphql';
import { css } from '../lib/styled-components';
import { GetMeQuery } from '../typings/__generated__/graphql';

const TalksPage: React.FC<RouteComponentProps> = () => (
  <>
    <Query<GetMeQuery> query={getMe}>
      {({ data, loading }) => {
        if (loading || !data) return null;

        return (
          <Helmet>
            <title>{`Talks — ${data.me.name}`}</title>
          </Helmet>
        );
      }}
    </Query>
    <Box
      as="main"
      css={css`
        display: grid;
        grid-template-columns: minmax(
          min-content,
          ${props => props.theme.space[11]}px
        );
        justify-content: center;
      `}
      mx={3}
      my={5}
    >
      <Flex alignItems="center" justifyContent="center">
        <Heading as="h1" color="blue" fontSize={2} mt={6} mb={0}>
          Talks
        </Heading>
      </Flex>
      <Talks />
    </Box>
    <Footer />
  </>
);

export default TalksPage;
