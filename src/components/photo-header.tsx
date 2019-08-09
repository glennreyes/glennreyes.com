import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { PhotoHeaderQuery } from '../types/generated/graphql';

const StyledImg = styled(Img)`
  height: ${p => p.theme.space[9]}px;
  margin: 0 calc(50% - 50vw);
  width: 100vw;

  ${p => p.theme.media.tablet`
    height: 400px;
  `}
`;

const PhotoHeader = () => {
  const data: PhotoHeaderQuery = useStaticQuery(graphql`
    query PhotoHeader {
      photo: file(relativePath: { eq: "photo-full.jpg" }) {
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

  return <StyledImg fluid={fluid} />;
};

export default PhotoHeader;
