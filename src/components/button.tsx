import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-family: ${p => p.theme.fonts.sans};
  justify-content: center;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export default Button;
