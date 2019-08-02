import React from 'react';
import { slugger } from '../../utils';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  React.useEffect(() => {
    // Always reset the slugger on every re-render, otherwise occurence indizes
    // get incremented on every page transition.
    slugger.reset();
  });

  return children;
};

export default Wrapper;
