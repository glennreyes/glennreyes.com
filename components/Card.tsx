import React, { useContext } from 'react';
import { Image } from 'rebass';
import { Card as BaseCard, CardProps as BaseCardProps } from 'rebass';
import { Interpolation } from 'styled-components';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const CardContainer: React.FC<BaseCardProps & CardProps> = BaseCard;

type CardProps = {
  darkMode?: boolean;
  image?: {
    src: string;
    alt?: string;
  };
};

const Card: React.FC<BaseCardProps & CardProps> = ({
  children,
  p,
  ...props
}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <CardContainer
      bg={darkMode ? 'blue25' : 'transparent'}
      borderRadius={1}
      css={css<CardProps>`
        display: flex;
        flex: 1;
        flex-direction: column;
        grid-column: span 2;
        overflow: hidden;
        transition: ${props => props.theme.transitions[0]};

        &:hover > ${CardContainer as Interpolation<{}>} {
          background-color: ${props =>
            props.theme.colors[props.darkMode ? 'blue' : 'lightGray']};
        }
      `}
      darkMode={darkMode}
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
      <CardContainer
        border={darkMode ? 0 : 1}
        css={css<CardProps>`
          border-radius: ${props =>
            props.image
              ? `0 0 ${props.theme.radii[1]}px ${props.theme.radii[1]}px`
              : `${props.theme.radii[1]}px`};
          ${props => (props.image ? 'border-top-width: 0;' : '')}
          display: flex;
          flex: 1;
          flex-direction: column;
          transition: ${props => props.theme.transitions[0]};
        `}
        p={3}
        {...props}
      >
        {children}
      </CardContainer>
    </CardContainer>
  );
};

export default Card;
