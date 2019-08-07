import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { PhotoQuery } from '../types/generated/graphql';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const StyledImg = styled(Img)`
  border-radius: 50%;
  width: 128px;

  ${p => p.theme.media.desktop`
    width: 160px;
  `}
`;

const Photo = () => {
  const data: PhotoQuery = useStaticQuery(graphql`
    query Photo {
      photo: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 640, maxWidth: 640) {
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

export default Photo;
