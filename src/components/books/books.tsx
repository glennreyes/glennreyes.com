import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Grid from './grid';
import { H2 } from '../mdx/headings';
import { BooksQuery } from '../../types/generated/graphql';

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
      <Grid
        books={(data && data.currentlyReading) || []}
        emptyText="None yet. What should I read next?"
        loading={loading}
        loadingAmount={1}
      />
      <H2>Books I've read in the past</H2>
      <Grid books={(data && data.read) || []} loading={loading} />
      <H2>Books I want to read next</H2>
      <Grid
        books={(data && data.wantToRead) || []}
        emptyText="None yet. What should I read next?"
        loading={loading}
      />
    </div>
  );
};

export default Books;
