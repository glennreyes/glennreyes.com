import React from 'react';
import Tilt from 'react-tilt';
import styled from 'styled-components';
import LoadingIndicator from '../loading-indicator';

const Wrapper = styled.div`
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
    <Wrapper>
      <Content>
        <Cover />
        <Bar />
        <Bar />
      </Content>
    </Wrapper>
  </Tilt>
);

export default Loading;
