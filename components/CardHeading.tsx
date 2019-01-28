import React, { useContext } from 'react';
import { Heading, HeadingProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

type CardHeadingProps = {
  truncate?: boolean;
};

const CardHeading: React.FC<HeadingProps & CardHeadingProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Heading
      as="h3"
      color={darkMode ? 'lightGray' : 'blue'}
      css={css<CardHeadingProps>`
        overflow: hidden;
        ${props => (props.truncate ? 'text-overflow: ellipsis;' : '')}
        transition: ${props => props.theme.transitions[0]};
        ${props => (props.truncate ? 'white-space: nowrap;' : '')}
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
