import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

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
  border-radius: ${p => p.theme.radii[1]}px;
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

export default LoadingIndicator;
