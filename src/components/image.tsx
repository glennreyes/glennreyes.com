import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

type ImageProps = GatsbyImageProps;

const Image = ({ alt, title, ...props }: ImageProps) => (
  <Img alt={alt || title} title={title || alt} {...props} />
);

export default Image;
