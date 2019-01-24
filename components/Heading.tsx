import React, { FunctionComponent } from 'react';
import { Heading as BaseHeading, HeadingProps } from 'rebass';

const Heading: FunctionComponent<HeadingProps> = props => (
  <BaseHeading
    color="darkGray"
    fontFamily="sans"
    fontSize={0}
    lineHeight={1}
    {...props}
  />
);

export const H1: FunctionComponent<HeadingProps> = props => (
  <Heading as="h1" color="blue" fontSize={2} {...props} />
);

export default Heading;
