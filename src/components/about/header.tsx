import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import DefaultImage from '../image';
import { AboutHeaderQuery } from '../../types/generated/graphql';

const Image = styled(DefaultImage)`
  height: ${p => p.theme.space[8]}px;
  margin: 0 calc(50% - 50vw) ${p => p.theme.space[3]}px;
  width: 100vw;

  ${p => p.theme.media.tablet`
    height: 640px;
  `}
`;

const AboutHeader = () => {
  const data: AboutHeaderQuery = useStaticQuery(graphql`
    query AboutHeader {
      photo: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
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
    <Image
      fluid={fluid}
      loading="eager"
      title={(author && `About ${author}`) || undefined}
    />
  );
};

export default AboutHeader;
