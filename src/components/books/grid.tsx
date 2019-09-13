import { rgba } from 'polished';
import React from 'react';
import Tilt from 'react-tilt';
import styled, { keyframes } from 'styled-components';
import Book from './book';
import Paragraph from '../mdx/paragraph';
import { Book as BookType } from '../../types/generated/graphql';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const LoadingIndicator = styled.div`
  background: ${p => p.theme.colors.bg};
  overflow: hidden;
  position: relative;

  &::after {
    animation: 1s ${shimmer} linear infinite;
    background: linear-gradient(
      to right,
      transparent 25%,
      ${p => rgba(p.theme.colors.cardBg, 0.75)} 50%,
      transparent 75%
    );
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 200%;
    z-index: 1;
  }
`;

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

const Cover = styled(LoadingIndicator)`
  min-height: ${p => p.theme.space[6]}px;
  margin: ${p => p.theme.space[2]}px;

  &::before {
    content: '';
    padding-bottom: 50%;
  }
`;

const Bar = styled(LoadingIndicator)`
  height: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px 0;
`;

const Loading = () => (
  <Tilt options={{ max: 10, scale: 1.02 }}>
    <LoadingWrapper>
      <Content>
        <Cover />
        <Bar />
        <Bar />
      </Content>
    </LoadingWrapper>
  </Tilt>
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
  loadingAmount?: number;
};

const Grid = ({ books, emptyText, loading, loadingAmount = 4 }: GridProps) => (
  <Wrapper>
    {Array.from({ length: loadingAmount }, (_, index) => (
      <Loading key={index} />
    ))}
    {/* {loading ? (
      Array.from({ length: loadingAmount }, (_, index) => (
        <Loading key={index} />
      ))
    ) : books.length > 0 ? (
      books.map(props => <Book key={props.id} {...props} />)
    ) : (
      <Paragraph>{emptyText || 'None'}</Paragraph>
    )} */}
  </Wrapper>
);

export default Grid;
