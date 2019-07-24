import React from 'react';
import { slugify } from '../utils';

const useSlug = (node: React.ReactNode): string => {
  const [slug, setSlug] = React.useState();

  React.useEffect(() => {
    setSlug(slugify(node));
  }, [node, setSlug]);

  return slug;
};

export default useSlug;
