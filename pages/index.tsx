import Head from 'next/head';
import React from 'react';
import me from '../data/me';

export default () => (
  <>
    <Head>
      <title>{`${me.name} — ${me.job}`}</title>
    </Head>
    <div css={{ color: 'blue' }}>Welcome to next.js!</div>
  </>
);
