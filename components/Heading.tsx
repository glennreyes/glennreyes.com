import React, { useContext } from 'react';
import { Heading as BaseHeading, HeadingProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const Heading: React.FC<HeadingProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BaseHeading
      color={darkMode ? 'lightGray50' : 'darkGray'}
      css={css`
        transition: ${props => props.theme.transitions[0]};
      `}
      fontFamily="sans"
      fontSize={0}
      lineHeight={1}
      {...props}
    />
  );
};

export const H1: React.FC<HeadingProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Heading
      as="h1"
      color={darkMode ? 'lightGray' : 'blue'}
      fontSize={2}
      {...props}
    />
  );
};

export default Heading;
