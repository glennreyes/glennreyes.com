import React from 'react';
import { TextProps } from 'rebass';
import Text from './Text';

const CardText: React.FC<TextProps> = props => (
  <Text lineHeight={1} {...props} />
);

export default CardText;
