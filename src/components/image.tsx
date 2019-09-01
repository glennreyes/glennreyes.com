import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

type ImageProps = GatsbyImageProps;

const Image = styled(({ alt, title, ...props }: ImageProps) => (
  <Img alt={alt || title} title={title || alt} {...props} />
))`
  & picture,
  & img {
    border-radius: inherit;
  }
`;

export default Image;
