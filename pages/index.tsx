import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import React from 'react';
import Intro from '../components/home/Intro';
import me, { Me } from '../data/me';

interface HomeProps {
  me: Me;
}

const Home: NextFunctionComponent<HomeProps> = ({ me }) => (
  <>
    <Head>
      <title>{`${me.name} — ${me.job}`}</title>
    </Head>
    <Intro me={me} />
  </>
);

Home.getInitialProps = () => ({ me });

export default Home;
