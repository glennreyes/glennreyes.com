import React, { useContext } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import { ThemeContext } from '../Theme';
import { css } from '../../lib/styled-components';
import Moon from '../../icons/moon.svg';
import Sun from '../../icons/sun.svg';

const ThemeSwitch: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleDarkMode}
      css={css`
        bottom: ${props => props.theme.space[4]}px;
        cursor: pointer;
        display: flex;
        opacity: ${props => props.theme.opacity[1]};
        outline: none;
        position: absolute;
        right: ${props => props.theme.space[4]}px;
        transition: ${props => props.theme.transitions[0]};

        &:hover {
          opacity: ${props => props.theme.opacity[2]};
        }
      `}
    >
      <Icon as={darkMode ? Sun : Moon} />
    </Button>
  );
};

export default ThemeSwitch;
