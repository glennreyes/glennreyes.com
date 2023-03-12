import { name, tagline } from './constants';

export const getTitle = (title?: string) => {
  return title ? `${title} - ${name}` : `${name} - ${tagline}`;
};
