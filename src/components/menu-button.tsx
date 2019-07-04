import ms from 'ms';
import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Button from './button';
import MenuToggleContext from './menu-toggle-context';
import { system } from '../theme';

const Wrapper = styled(Button)`
  flex-direction: column;
  height: 24px;
  width: 24px;
`;

const Stroke = styled.span`
  background: ${p => p.theme.textColor};
  border-radius: 1px;
  display: block;
  height: 2px;
  margin: 3px 0;
  width: 20px;
`;

const transitionDefaultProps = {
  duration: ms(system.transition),
  type: 'keyframes',
};

interface TransitionProps {
  from: string;
  to: string;
}

const closeTransition = ({ from, to }: TransitionProps) => ({
  rotate: {
    ...transitionDefaultProps,
    values: [from, to, to],
  },
  y: {
    ...transitionDefaultProps,
    values: [from, from, to],
  },
});

const openTransition = ({ from, to }: TransitionProps) => ({
  rotate: {
    ...transitionDefaultProps,
    values: [from, from, to],
  },
  y: {
    ...transitionDefaultProps,
    values: [from, to, to],
  },
});

const TopStroke = posed(Stroke)({
  closed: {
    rotate: '0deg',
    transition: closeTransition,
    y: 0,
  },
  open: {
    rotate: '135deg',
    transition: openTransition,
    y: 4,
  },
});

const BottomStroke = posed(Stroke)({
  closed: {
    rotate: '0deg',
    transition: closeTransition,
    y: 0,
  },
  open: {
    rotate: '-135deg',
    transition: openTransition,
    y: -4,
  },
});

const MenuButton = () => {
  const { isOpen, toggleOpen } = React.useContext(MenuToggleContext);
  const pose = isOpen ? 'open' : 'closed';

  return (
    <Wrapper onClick={() => toggleOpen()}>
      <TopStroke pose={pose} />
      <BottomStroke pose={pose} />
    </Wrapper>
  );
};

export default MenuButton;
