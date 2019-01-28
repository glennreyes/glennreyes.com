import React from 'react';
import { Box, BoxProps } from 'rebass';
import { css } from '../lib/styled-components';

type LineProps = {
  darkMode?: boolean;
};

const Line: React.FC<BoxProps & LineProps> = props => (
  <Box
    as="hr"
    css={css<{ darkMode?: boolean }>`
      border-color: ${props =>
        props.theme.colors[props.darkMode ? 'blue' : 'lightGray']};
      border-style: solid;
      border-width: 1px 0 0;
      flex: 1;
    `}
    {...props}
  />
);

export default Line;
