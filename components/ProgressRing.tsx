import React from 'react';
import { css } from '../lib/styled-components';

type ProgressRingProps = {
  radius?: number;
  stroke?: number;
  progress: number;
};

const ProgressRing: React.FC<ProgressRingProps> = ({
  radius = 12,
  stroke = 2,
  progress,
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <svg
      css={css`
        transform: rotate(90deg) scaleX(-1);
      `}
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference - progress * circumference}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressRing;
