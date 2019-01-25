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
      {...props}
    />
  );
};

export default Heading;
