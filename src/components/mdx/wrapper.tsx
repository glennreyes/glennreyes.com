import React from 'react';
import { slugger } from '../../utils';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  React.useEffect(() => {
    slugger.reset();
  });

  return children;
};

export default Wrapper;
