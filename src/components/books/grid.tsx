import React from 'react';
import styled from 'styled-components';
import Book from './book';
import Loading from './loading';
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
  loadingAmount?: number;
};

const Grid = ({ books, emptyText, loading, loadingAmount = 4 }: GridProps) =>
  loading ? (
    <Wrapper>
      {Array.from({ length: loadingAmount }, (_, index) => (
        <Loading key={index} />
      ))}
    </Wrapper>
  ) : books.length > 1000 ? (
    <Wrapper>
      {books.map(props => (
        <Book key={props.id} {...props} />
      ))}
    </Wrapper>
  ) : (
    <Paragraph>{emptyText || 'None'}</Paragraph>
  );

export default Grid;
