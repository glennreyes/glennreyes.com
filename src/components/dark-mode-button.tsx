import ms from 'ms';
import React from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import Button from './button';
import DarkModeContext from './dark-mode-context';
import { ReactComponent as MoonSvg } from '../icons/moon.svg';
import { ReactComponent as SunSvg } from '../icons/sun.svg';
import { system } from '../theme';

const Wrapper = styled(Button)`
  height: ${p => p.theme.space[5]}px;
  margin-left: auto;
  position: relative;
  width: ${p => p.theme.space[5]}px;
`;

const iconStyles = css`
  color: ${p => p.theme.colors.text};
  height: 24px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
`;

const transition = {
  rotate: {
    duration: ms(system.transition) * 2,
  },
};

const init = {
  x: '-50%',
  y: '-50%',
};

const Moon = posed(styled.span`
  ${iconStyles}
  // Set opacity to zero in order to remove flash at initial render in prod build.
  opacity: 0;
`)({
  dark: {
    opacity: 1,
    rotate: '0deg',
    transition,
  },
  init,
  light: {
    opacity: 0,
    rotate: '-135deg',
    transition,
  },
});

const Sun = posed(styled.span`
  ${iconStyles}
`)({
  dark: {
    opacity: 0,
    rotate: '0deg',
    transition,
  },
  init,
  light: {
    opacity: 1,
    rotate: '-90deg',
    transition,
  },
});

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);
  const pose = darkMode ? 'dark' : 'light';
  const title = darkMode ? 'Light mode' : 'Dark mode';

  return (
    <Wrapper
      aria-label={`Switch to ${title.toLowerCase()}`}
      onClick={() => toggleDarkMode()}
      title={title}
    >
      <Moon pose={pose}>
        <MoonSvg />
      </Moon>
      <Sun pose={pose}>
        <SunSvg />
      </Sun>
    </Wrapper>
  );
};

export default DarkModeButton;
