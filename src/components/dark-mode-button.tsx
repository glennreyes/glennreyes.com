import React from 'react';
import styled, { css } from 'styled-components';
import Button from './button';
import DarkModeContext from './dark-mode-context';
import { ReactComponent as Moon } from '../icons/moon.svg';
import { ReactComponent as Sun } from '../icons/sun.svg';

const Wrapper = styled(Button)`
  height: 24px;
  position: relative;
  width: 24px;
`;

const iconStyles = css`
  color: ${p => p.theme.textColor};
  left: 0;
  position: absolute;
  top: 0;
  transition: color ${p => p.theme.transition},
    opacity ${p => `${parseFloat(p.theme.transition) * 0.5}`}s,
    transform ${p => `${parseFloat(p.theme.transition) * 2}`}s;
`;

const MoonIcon = styled(Moon)<{ darkMode: boolean }>`
  ${iconStyles}
  opacity: ${p => (p.darkMode ? '1' : '0')};
  transform: ${p => (p.darkMode ? 'none' : 'rotate(-135deg)')};
`;

const SunIcon = styled(Sun)<{ darkMode: boolean }>`
  ${iconStyles}
  opacity: ${p => (p.darkMode ? '0' : '1')};
  transform: ${p => (p.darkMode ? 'none' : 'rotate(-90deg)')};
`;

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  return (
    <Wrapper onClick={() => toggleDarkMode()}>
      <MoonIcon darkMode={darkMode} />
      <SunIcon darkMode={darkMode} />
    </Wrapper>
  );
};

export default DarkModeButton;
