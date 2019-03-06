import React, { useContext } from 'react';
import { Image as BaseImage, ImageProps as BaseImageProps } from 'rebass';
import { Card as BaseCard, CardProps as BaseCardProps } from 'rebass';
import { Interpolation } from 'styled-components';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

const CardContainer: React.FC<BaseCardProps & CardProps> = BaseCard;
const Image: React.FC<BaseImageProps & CardProps> = BaseImage;

type CardProps = {
  darkMode?: boolean;
  type?: 'default' | 'light';
  image?: {
    src: string;
    alt?: string;
  };
};

const Card: React.FC<BaseCardProps & CardProps> = ({
  children,
  p,
  type,
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
        flex-direction: ${props => (props.type === 'light' ? 'row' : 'column')};
        grid-column: span 2;
        overflow: hidden;
        transition: ${props => props.theme.transitions[0]};

        &:hover > ${CardContainer as Interpolation<{}>} {
          background-color: ${props =>
            props.theme.colors[props.darkMode ? 'blue' : 'lightGray']};
        }
      `}
      darkMode={darkMode}
      type={type}
    >
      {props.image && (
        <Image
          css={css<BaseImageProps & CardProps>`
            border-radius: ${props =>
              props.src
                ? props.type === 'light'
                  ? `${props.theme.radii[1]}px 0 0 ${props.theme.radii[1]}px`
                  : `${props.theme.radii[1]}px ${props.theme.radii[1]}px 0 0`
                : 0};
            display: block;
            ${props =>
              props.type === 'light'
                ? `height: ${props.theme.space[8]}px;}`
                : ''}
            object-fit: cover;
            ${props =>
              props.type === 'light'
                ? `width: ${props.theme.space[8]}px;}`
                : ''}
          `}
          alt={props.image.alt}
          src={props.image.src}
          type={type}
        />
      )}
      <CardContainer
        border={darkMode ? 0 : 1}
        css={css<CardProps>`
          border-radius: ${props =>
            props.image
              ? props.type === 'light'
                ? `0 ${props.theme.radii[1]}px ${props.theme.radii[1]}px 0`
                : `0 0 ${props.theme.radii[1]}px ${props.theme.radii[1]}px`
              : `${props.theme.radii[1]}px`};
          ${props =>
            props.image
              ? props.type === 'light'
                ? 'border-left-width: 0;'
                : 'border-top-width: 0;'
              : ''}
          display: flex;
          flex: 1;
          flex-direction: column;
          transition: ${props => props.theme.transitions[0]};
        `}
        p={3}
        type={type}
        {...props}
      >
        {children}
      </CardContainer>
    </CardContainer>
  );
};

export default Card;
