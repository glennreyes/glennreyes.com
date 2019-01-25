import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from 'rebass';
import fetchRepos from '../api/fetchRepos';
import Intro from '../components/home/Intro';
import OSS from '../components/home/OSS';
import me, { Me } from '../data/me';
import { css } from '../lib/styled-components';

interface HomeProps {
  me: Me;
  repos: any;
}

const Home: NextFC<HomeProps> = ({ me, repos }) => (
  <>
    <Head>
      <title>{`${me.name} — ${me.job}`}</title>
    </Head>
    <Intro me={me} />
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
      my={3}
    >
      <OSS repos={repos} />
    </Box>
  </>
);

Home.getInitialProps = async () => {
  const repos = await fetchRepos();

  return { me, repos };
};

export default Home;
