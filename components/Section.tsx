import React from 'react';
import { Box } from 'rebass';
import Heading from './Heading';
import { css } from '../lib/styled-components';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, ...props }) => (
  <Box as="section" p={3}>
    <Heading fontSize={1} mb={3}>
      {title}
    </Heading>
    <Box
      css={css`
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(${props => props.theme.space[9]}px, 1fr)
        );
        gap: ${props => props.theme.space[3]}px;
      `}
      {...props}
    />
  </Box>
);

export default Section;
