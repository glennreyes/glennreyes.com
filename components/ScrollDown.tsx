import React, { FunctionComponent } from 'react';
import { Box, Button } from 'rebass';
import { css } from '../lib/styled-components';
import ChevronDown from '../icons/chevron-down.svg';

const ScrollDown: FunctionComponent = () => (
  <Button
    bg="transparent"
    border="none"
    px={0}
    py={0}
    css={css`
      bottom: ${props => props.theme.space[7]}px;
      cursor: pointer;
      display: flex;
      opacity: ${props => props.theme.opacity[1]};
      outline: none;
      position: absolute;
      transition: ${props => props.theme.transition[0]};

      &:hover {
        opacity: ${props => props.theme.opacity[2]};
      }
    `}
  >
    <Box color="blue" as={ChevronDown} />
  </Button>
);

export default ScrollDown;
