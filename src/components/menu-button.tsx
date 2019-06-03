import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';
import Button from './button';
import MenuToggleContext from './menu-toggle-context';

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

const TopStroke = posed(Stroke)({
  closed: { rotate: '0deg', y: 0 },
  open: { rotate: '135deg', y: 4 },
});

const BottomStroke = posed(Stroke)({
  closed: { rotate: '0deg', y: 0 },
  open: { rotate: '-135deg', y: -4 },
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
