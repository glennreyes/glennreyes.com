import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const GatsbyImage = styled(Img)`
  & picture,
  & img {
    border-radius: inherit;
  }
`;

const DefaultImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const Image = ({
  src,
  alt,
  title,
  ...props
}: GatsbyImageProps & React.ImgHTMLAttributes<{}>) => {
  if (src) {
    return (
      <DefaultImage
        src={src}
        alt={alt || title}
        title={title || alt}
        {...props}
      />
    );
  }

  return <GatsbyImage alt={alt || title} title={title || alt} {...props} />;
};

export default Image;
