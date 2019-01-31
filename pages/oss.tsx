import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box, Flex } from 'rebass';
import fetchBooks from '../api/fetchBooks';
import fetchRepos from '../api/fetchRepos';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import OSS from '../components/oss/OSS';
import me, { Me } from '../data/me';
import projects, { Project } from '../data/projects';
import talks, { Talk } from '../data/talks';
import { css } from '../lib/styled-components';

type HomeProps = {
  books: Book[];
  me: Me;
  projects: Project[];
  repos: Repository[];
  talks: Talk[];
};

const Home: NextFC<HomeProps> = ({ me, repos }) => (
  <>
    <Head>
      <title>{`Open Source Projects — ${me.name}`}</title>
    </Head>
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
      <OSS repos={repos} />
    </Box>
    <Footer me={me} />
  </>
);

Home.getInitialProps = async () => {
  const [books, repos] = await Promise.all([
    fetchBooks(),
    fetchRepos({ first: 100 }),
  ]);

  return { books, me, projects, repos, talks };
};

export default Home;
