import { NextFC } from 'next';
import Head from 'next/head';
import React from 'react';
import { Box } from 'rebass';
import fetchRepos from '../api/fetchRepos';
import Intro from '../components/home/Intro';
import OSS from '../components/home/OSS';
import Projects from '../components/home/Projects';
import Talks from '../components/home/Talks';
import me, { Me } from '../data/me';
import projects, { Project } from '../data/projects';
import talks, { Talk } from '../data/talks';
import { css } from '../lib/styled-components';

type HomeProps = {
  me: Me;
  projects: Project[];
  repos: Repository[];
  talks: Talk[];
};

const Home: NextFC<HomeProps> = ({ me, projects, repos, talks }) => (
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
      <Projects projects={projects} />
      <Talks talks={talks} />
    </Box>
  </>
);

Home.getInitialProps = async () => {
  const repos = await fetchRepos();

  return { me, projects, repos, talks };
};

export default Home;
