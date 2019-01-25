import React, { useContext } from 'react';
import { Text as BaseText, TextProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const Text: React.FC<TextProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BaseText
      as="p"
      color={darkMode ? 'gray' : 'darkGray'}
      css={css`
        transition: ${props => props.theme.transitions[0]};
      `}
      fontFamily="sans"
      lineHeight={1}
      mb={0}
      mt={0}
      {...props}
    />
  );
};

export default Text;
