import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { rgba } from 'polished';
import React from 'react';
import DefaultTilt from 'react-tilt';
import styled from 'styled-components';
import DefaultImage from './image';
import { PhotoQuery } from '../types/generated/graphql';

const Image = styled(DefaultImage)`
  border-radius: 50%;
  box-shadow: 0 0 32px ${p => rgba(p.theme.colors.black, 0.25)};
  width: 128px;

  ${p => p.theme.media.desktop`
    width: 160px;
  `}
`;

const Tilt = styled(DefaultTilt)`
  display: inline-flex;
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
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const fluid =
    (data.photo &&
      data.photo.childImageSharp &&
      (data.photo.childImageSharp.fluid as FluidObject)) ||
    undefined;

  const author =
    (data.site && data.site.siteMetadata && data.site.siteMetadata.author) ||
    undefined;

  return (
    <Tilt options={{ max: 20, scale: 1 }}>
      <Image loading="eager" fluid={fluid} title={author} />
    </Tilt>
  );
};

export default Photo;
