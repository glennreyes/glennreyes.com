import React from 'react';
import styled from 'styled-components';
import Book from './book';
import Paragraph from '../mdx/paragraph';
import { Book as BookType } from '../../types/generated/graphql';

const LoadingWrapper = styled.div`
  background: ${p => p.theme.colors.cardBg};
  border-radius: ${p => p.theme.radii[1]}px;
  // Approx ratio of a book cover
  padding-bottom: calc(475% / 312 * 100);
  position: relative;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Cover = styled.div`
  background: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii[1]}px;
  min-height: ${p => p.theme.space[6]}px;
  margin: ${p => p.theme.space[2]}px;

  &::before {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
`;

const Bar = styled.div`
  background: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii[1]}px;
  height: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px 0;
`;

const Loading = () => (
  <LoadingWrapper>
    <Content>
      <Cover />
      <Bar />
      <Bar />
    </Content>
  </LoadingWrapper>
);

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
  loadingAmount: number;
};

const Grid = ({ books, emptyText, loading, loadingAmount = 4 }: GridProps) => (
  <Wrapper>
    {loading ? (
      Array.from({ length: loadingAmount }, (_, index) => (
        <Loading key={index} />
      ))
    ) : books.length > 0 ? (
      books.map(props => <Book key={props.id} {...props} />)
    ) : (
      <Paragraph>{emptyText || 'None'}</Paragraph>
    )}
  </Wrapper>
);

export default Grid;
