import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { SpeakerHeaderQuery } from '../types/generated/graphql';

const StyledImg = styled(Img)`
  height: ${p => p.theme.space[8]}px;
  margin: 0 calc(50% - 50vw) ${p => p.theme.space[3]}px;
  width: 100vw;

  ${p => p.theme.media.tablet`
    height: 640px;
  `}
`;

const SpeakerHeader = () => {
  const data: SpeakerHeaderQuery = useStaticQuery(graphql`
    query SpeakerHeader {
      photo: file(relativePath: { eq: "speaker.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fluid =
    (data.photo &&
      data.photo.childImageSharp &&
      (data.photo.childImageSharp.fluid as FluidObject)) ||
    undefined;

  return <StyledImg loading="eager" fluid={fluid} />;
};

export default SpeakerHeader;
