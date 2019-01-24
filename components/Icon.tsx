import React, { useContext } from 'react';
import { Box, BoxProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const Icon: React.FC<BoxProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box
      color={darkMode ? 'lightGray' : 'blue'}
      css={css`
        transition: ${props => props.theme.transitions[0]};
      `}
      {...props}
    />
  );
};

export default Icon;
