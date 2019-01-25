import React, { useContext } from 'react';
import { Card as BaseCard, CardProps as BaseCardProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

interface CardProps {
  darkMode?: boolean;
}

const Card: React.FC<BaseCardProps & CardProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BaseCard
      bg={darkMode ? 'blue25' : 'transparent'}
      border={darkMode ? 0 : 1}
      borderRadius={1}
      css={css<CardProps>`
        height: 100%;
        transition: ${props => props.theme.transitions[0]};

        &:hover {
          background-color: ${props =>
            props.theme.colors[props.darkMode ? 'blue' : 'lightGray']};
        }
      `}
      darkMode={darkMode}
      p={3}
      {...props}
    />
  );
};

export default Card;
