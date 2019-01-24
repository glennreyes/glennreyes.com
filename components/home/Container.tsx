import React, { useContext } from 'react';
import { Flex, FlexProps } from 'rebass';
import { ThemeContext } from '../Theme';
import { css } from '../../lib/styled-components';

export interface ContainerProps {
  darkMode?: boolean;
}

const Container: React.FC<FlexProps & ContainerProps> = props => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Flex
      alignItems="center"
      darkMode={darkMode}
      flexDirection="column"
      justifyContent="center"
      css={css<ContainerProps>`
        height: 100%;
        position: relative;

        &::after,
        &::before {
          bottom: 0;
          content: '';
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: ${props => props.theme.transitions[0]};
          z-index: -1;
        }

        &::after {
          background: linear-gradient(
            to right,
            ${props => props.theme.colors.darkBlue},
            ${props => props.theme.colors.blue}
          );
          opacity: ${props => props.theme.opacity[props.darkMode ? 4 : 0]};
        }

        &::before {
          background: linear-gradient(
            to right,
            ${props => props.theme.colors.white},
            ${props => props.theme.colors.lightGray}
          );
          opacity: ${props => props.theme.opacity[props.darkMode ? 0 : 4]};
        }
      `}
      {...props}
    />
  );
};

export default Container;
