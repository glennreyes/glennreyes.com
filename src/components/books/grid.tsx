import React from 'react';
import styled from 'styled-components';
import Book from './book';
import Paragraph from '../mdx/paragraph';
import { Book as BookType } from '../../types/generated/graphql';

const Wrapper = styled.div`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${p => p.theme.space[7]}px, 1fr)
  );
  margin: ${p => p.theme.space[3]}px 0;
`;

type GridProps = {
  books: Pick<BookType, 'title' | 'id' | 'imageUrl' | 'url'>[];
  emptyText?: string;
  loading: boolean;
};

const Grid = ({ books, emptyText, loading }: GridProps) => (
  <Wrapper>
    {loading ? (
      'loading ...'
    ) : books.length > 0 ? (
      books.map(props => <Book key={props.id} {...props} />)
    ) : (
      <Paragraph>{emptyText || 'None'}</Paragraph>
    )}
  </Wrapper>
);

export default Grid;
