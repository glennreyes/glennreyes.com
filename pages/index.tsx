import Head from 'next/head';
import me from '../data/me';

export default () => (
  <>
    <Head>
      <title>{`${me.name} — ${me.job}`}</title>
    </Head>
    <div>Welcome to next.js!</div>
  </>
);
