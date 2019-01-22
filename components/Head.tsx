import Head from 'next/head';

type Props = {
  title: string;
};

export default ({ title }: Props) => (
  <Head>
    <title>{title}</title>
  </Head>
);
