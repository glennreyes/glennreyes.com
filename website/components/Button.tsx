import React from 'react';
import { Button as BaseButton, ButtonProps } from 'rebass';

const Button: React.FC<
  ButtonProps & React.DOMAttributes<HTMLButtonElement>
> = props => (
  <BaseButton bg="transparent" border="none" px={0} py={0} {...props} />
);

export default Button;
