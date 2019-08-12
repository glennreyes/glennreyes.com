import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { rgba } from 'polished';
import React from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';
import { PhotoQuery } from '../types/generated/graphql';

const StyledImg = styled(Img)`
  border-radius: 50%;
  box-shadow: 0 0 32px ${p => rgba(p.theme.colors.black, 0.25)};
  width: 128px;

  ${p => p.theme.media.desktop`
    width: 160px;
  `}
`;

const Photo = () => {
  const data: PhotoQuery = useStaticQuery(graphql`
    query Photo {
      photo: file(relativePath: { eq: "portrait.jpg" }) {
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

  return (
    <Tilt options={{ max: 20, scale: 1 }}>
      <StyledImg loading="eager" fluid={fluid} />
    </Tilt>
  );
};

export default Photo;
