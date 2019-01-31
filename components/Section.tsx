import React from 'react';
import { Box, BoxProps } from 'rebass';
import Heading from './Heading';
import { css } from '../lib/styled-components';

type SectionProps = {
  title: string;
};

const Section: React.FC<BoxProps & SectionProps> = ({ title, ...props }) => (
  <Box as="section" py={5}>
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
