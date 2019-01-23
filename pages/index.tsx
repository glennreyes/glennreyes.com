import Head from 'next/head';
import React, { Component } from 'react';
import { Card } from 'rebass';
import me from '../data/me';

type HomeProps = {
  me: typeof me;
};

class Home extends Component<HomeProps> {
  static async getInitialProps() {
    return { me };
  }

  render() {
    const { job, name } = this.props.me;

    return (
      <>
        <Head>
          <title>{`${name} — ${job}`}</title>
        </Head>
        <Card variant="outline">Sample card</Card>
        <div css={{ color: 'blue' }}>Welcome to next.js!</div>
      </>
    );
  }
}

export default Home;
