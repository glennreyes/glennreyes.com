import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import fetchRepos from '../api/fetchRepos';
import Intro from '../components/home/Intro';
import OSS from '../components/home/OSS';
import me, { Me } from '../data/me';

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
    <OSS repos={repos} />
  </>
);

Home.getInitialProps = async () => {
  const repos = await fetchRepos();

  return { me, repos };
};

export default Home;
