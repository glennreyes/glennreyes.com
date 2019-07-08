import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Photo from '../components/photo';
import SEO from '../components/seo';

const Section = styled.section``;

const IntroSection = styled(Section)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${p => p.theme.space[5]}px 0;
  text-align: center;

  ${p => p.theme.media.desktop`
    height: calc(100vh - ${p.theme.space[6]}px);
  `}
`;

const Greeting = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  margin: ${p => p.theme.space[2]}px 0 0;
`;

const Tagline = styled.p`
  color: ${p => p.theme.textColor2};
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[1]};
  margin: 0;
  max-width: 320px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection>
      <Photo />
      <Greeting>Hey there, I’m Glenn.</Greeting>
      <Tagline>
        I help people create beautiful products through web technologies.
      </Tagline>
    </IntroSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
