import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import { Query } from 'react-apollo';
import { Box } from 'rebass';
import Footer from '../components/Footer';
import Books from '../components/home/Books';
import Intro from '../components/home/Intro';
import OSS from '../components/home/OSS';
import Projects from '../components/home/Projects';
import Talks from '../components/home/Talks';
import getMe from '../graphql/getMe.graphql';
import { css } from '../lib/styled-components';
import { GetMeQuery } from '../typings/__generated__/graphql';

const Home: NextFC = () => (
  <>
    <Query<GetMeQuery> query={getMe}>
      {({ data, loading }) => {
        if (loading || !data) return null;

        return (
          <Head>
            <title>{`${data.me.name} — ${data.me.job}`}</title>
          </Head>
        );
      }}
    </Query>
    <Intro />
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
      <OSS />
      <Projects />
      <Talks />
      <Books />
    </Box>
    <Footer />
  </>
);

export default Home;
