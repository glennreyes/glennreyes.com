import React, { useContext } from 'react';
import { Image } from 'rebass';
import { Card as BaseCard, CardProps as BaseCardProps } from 'rebass';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

interface CardProps {
  darkMode?: boolean;
  image?: {
    src: string;
    alt?: string;
  };
}

const Card: React.FC<BaseCardProps & CardProps> = ({
  children,
  p,
  ...props
}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BaseCard
      css={css`
        overflow: hidden;
      `}
    >
      {props.image && (
        <Image
          css={css<{ src: string }>`
            border-radius: ${props =>
              props.src
                ? `${props.theme.radii[1]}px ${props.theme.radii[1]}px 0 0`
                : 'none'};
            display: block;
          `}
          alt={props.image.alt}
          src={props.image.src}
        />
      )}
      <BaseCard
        bg={darkMode ? 'blue25' : 'transparent'}
        border={darkMode ? 0 : 1}
        css={css<CardProps>`
          border-radius: ${props =>
            props.image
              ? `0 0 ${props.theme.radii[1]}px ${props.theme.radii[1]}px`
              : `${props.theme.radii[1]}px`};
          transition: ${props => props.theme.transitions[0]};

          &:hover {
            background-color: ${props =>
              props.theme.colors[props.darkMode ? 'blue' : 'lightGray']};
          }
        `}
        darkMode={darkMode}
        p={3}
        {...props}
      >
        {children}
      </BaseCard>
    </BaseCard>
  );
};

export default Card;
