import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from 'rebass';
import fetchBooks from '../api/fetchBooks';
import fetchRepos from '../api/fetchRepos';
import Books from '../components/home/Books';
import Intro from '../components/home/Intro';
import OSS from '../components/home/OSS';
import Projects from '../components/home/Projects';
import Talks from '../components/home/Talks';
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

const Home: NextFC<HomeProps> = ({ books, me, projects, repos, talks }) => (
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
      mx={3}
      my={4}
    >
      <OSS repos={repos} />
      <Projects projects={projects} />
      <Talks talks={talks} />
      <Books books={books} />
    </Box>
  </>
);

Home.getInitialProps = async () => {
  const [books, repos] = await Promise.all([fetchBooks(), fetchRepos()]);

  return { books, me, projects, repos, talks };
};

export default Home;
