import React, { useContext } from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const Text: React.FC<BaseTextProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BaseText
      as="p"
      color={darkMode ? 'gray50' : 'darkGray'}
      css={css`
        transition: ${props => props.theme.transitions[0]};
      `}
      fontFamily="sans"
      mb={0}
      mt={0}
      {...props}
    />
  );
};

export default Text;
