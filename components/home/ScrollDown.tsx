import React from 'react';
import Icon from '../Icon';
import Button from '../Button';
import { css } from '../../lib/styled-components';
import ChevronDown from '../../icons/chevron-down.svg';

const ScrollDown: React.FC = () => (
  <Button
    css={css`
      bottom: ${props => props.theme.space[7]}px;
      cursor: pointer;
      display: flex;
      opacity: ${props => props.theme.opacity[1]};
      outline: none;
      position: absolute;
      transition: ${props => props.theme.transitions[0]};

      &:hover {
        opacity: ${props => props.theme.opacity[2]};
      }
    `}
  >
    <Icon as={ChevronDown} />
  </Button>
);

export default ScrollDown;
