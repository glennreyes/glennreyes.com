import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-family: ${p => p.theme.fonts.sans};
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export default Button;
