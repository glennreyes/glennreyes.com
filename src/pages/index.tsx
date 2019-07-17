import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Photo from '../components/photo';
import SEO from '../components/seo';
import { HomeQuery } from '../types/generated/graphql';

const Section = styled.section`
  padding: 0 ${p => p.theme.space[3]}px;

  ${p => p.theme.media.tablet`
    padding-left: ${p.theme.space[5]}px;
    padding-right: ${p.theme.space[5]}px;
  `}
`;

const IntroSection = styled(Section)`
  padding-bottom: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[6]}px;

  ${p => p.theme.media.tablet`
    padding-bottom: ${p.theme.space[7]}px;
    padding-top: ${p.theme.space[7]}px;
  `}

  ${p => p.theme.media.desktop`
    padding-bottom: ${p.theme.space[8]}px;
    padding-top: ${p.theme.space[8]}px;
  `}
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  text-align: center;

  ${p => p.theme.media.tablet`
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  `}
`;

const Intro = styled.div`
  ${p => p.theme.media.tablet`
    margin-left: ${p.theme.space[4]}px;
  `}

  ${p => p.theme.media.desktop`
    margin-left: ${p.theme.space[5]}px;
  `}
`;

const Greeting = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
  margin: ${p => p.theme.space[2]}px 0 0;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[5]}px;
    margin-top: 0;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[6]}px;
  `}
`;

const Tagline = styled.p`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  margin: 0;
  max-width: 320px;

  ${p => p.theme.media.tablet`
    font-size: ${p.theme.fontSizes[3]}px;
    max-width: 480px;
  `}

  ${p => p.theme.media.desktop`
    font-size: ${p.theme.fontSizes[4]}px;
    max-width: 640px;
  `}
`;

const Home = () => {
  const { site }: HomeQuery = useStaticQuery(
    graphql`
      query Home {
        site {
          siteMetadata {
            description
          }
        }
      }
    `,
  );

  const tagline =
    (site && site.siteMetadata && site.siteMetadata.description) || null;

  return (
    <Layout>
      <SEO title="Home" />
      <IntroSection>
        <Content>
          <Photo />
          <Intro>
            <Greeting>Hey there, I’m Glenn.</Greeting>
            {tagline && <Tagline>{tagline}</Tagline>}
          </Intro>
        </Content>
      </IntroSection>
    </Layout>
  );
};

export default Home;
