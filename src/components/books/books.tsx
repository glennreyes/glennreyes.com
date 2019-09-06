import gql from 'graphql-tag';
import React from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { H2 } from '../mdx/headings';
import DefaultImage from '../image';
import DefaultLink from '../link';
import { BooksQuery } from '../../types/generated/graphql';

type BookProps = {
  id: string;
  imageUrl: string;
  title: string;
  url: string;
};

const Image = styled(DefaultImage)`
  border-radius: ${p => p.theme.radii[1]}px;
  display: block;
  height: 100%;
  transition: box-shadow ${p => p.theme.transition};
  width: 100%;

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverShadow};
  }
`;

const Link = styled(DefaultLink)`
  display: block;
  height: 100%;
`;

const Book = ({ imageUrl, title, url }: BookProps) => (
  <Tilt options={{ max: 10, scale: 1.02 }}>
    <Link target="_blank" title={title} to={url}>
      <Image src={imageUrl} alt={title} title={title} />
    </Link>
  </Tilt>
);

const Grid = styled.div`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${p => p.theme.space[7]}px, 1fr)
  );
  margin: ${p => p.theme.space[3]}px 0;
`;

const Books = () => {
  const { data, loading } = useQuery<BooksQuery>(gql`
    fragment bookInfo on Book {
      id
      imageUrl
      title
      url
    }
    query Books {
      read: books(type: read) {
        ...bookInfo
      }
      currentlyReading: books(type: currentlyReading) {
        ...bookInfo
      }
      wantToRead: books(type: wantToRead) {
        ...bookInfo
      }
    }
  `);
  return (
    <div>
      <H2>Currently reading</H2>
      <Grid>
        {loading
          ? 'loading ...'
          : data && data.currentlyReading
          ? data.currentlyReading.map(({ __typename, ...props }) => (
              <Book key={props.id} {...props} />
            ))
          : 'not found'}
      </Grid>
      <H2>Books I've read in the past</H2>
      <Grid>
        {loading
          ? 'loading ...'
          : data && data.read
          ? data.read.map(({ __typename, ...props }) => (
              <Book key={props.id} {...props} />
            ))
          : 'not found'}
      </Grid>
      <H2>Books I want to read next</H2>
      <Grid>
        {loading
          ? 'loading ...'
          : data && data.wantToRead
          ? data.wantToRead.map(({ __typename, ...props }) => (
              <Book key={props.id} {...props} />
            ))
          : 'not found'}
      </Grid>
    </div>
  );
};

export default Books;
