import React, { FunctionComponent } from 'react';
import { Text as BaseText, TextProps } from 'rebass';

const Text: FunctionComponent<TextProps> = props => (
  <BaseText
    as="p"
    color="darkGray"
    fontFamily="sans"
    lineHeight={1}
    mb={0}
    mt={0}
    {...props}
  />
);

export default Text;
