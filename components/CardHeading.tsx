import React, { useContext } from 'react';
import { Heading } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const CardHeading: React.FC = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Heading
      as="h3"
      color={darkMode ? 'lightGray' : 'blue'}
      css={css`
        overflow: hidden;
        text-overflow: ellipsis;
        transition: ${props => props.theme.transitions[0]};
        white-space: nowrap;
      `}
      fontFamily="sans"
      fontSize={1}
      lineHeight={2}
      mr={1}
      {...props}
    />
  );
};

export default CardHeading;
