import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Box, Flex } from 'rebass';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import OSS from '../components/oss/OSS';
import { getMe } from '../graphql';
import { css } from '../lib/styled-components';
import { GetMeQuery } from '../typings/__generated__/graphql';

const OSSPage: React.FC<RouteComponentProps> = () => (
  <>
    <Query<GetMeQuery> query={getMe}>
      {({ data, loading }) => {
        if (loading || !data) return null;

        return (
          <Helmet>
            <title>{`Open Source Projects — ${data.me.name}`}</title>
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
          Open Source Projects
        </Heading>
      </Flex>
      <OSS />
    </Box>
    <Footer />
  </>
);

export default OSSPage;
