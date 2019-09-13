import React from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';
import DefaultImage from '../image';
import DefaultLink from '../link';

type BookProps = {
  id: string;
  imageUrl: string;
  title: string;
  url: string;
};

const Image = styled(DefaultImage)`
  border-radius: inherit;
  display: block;
  height: inherit;
  transition: box-shadow ${p => p.theme.transition};
  transform: scale(1.01);
  width: 100%;

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
  }
`;

const Link = styled(DefaultLink)`
  border-radius: ${p => p.theme.radii[1]}px;
  display: block;
  height: 100%;
  overflow: hidden;
`;

const Book = ({ imageUrl, title, url }: BookProps) => (
  <Tilt options={{ max: 10, scale: 1.02 }}>
    <Link target="_blank" title={title} to={url}>
      <Image alt={title} loading="lazy" src={imageUrl} title={title} />
    </Link>
  </Tilt>
);

export default Book;
