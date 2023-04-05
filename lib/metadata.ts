import { name, tagline } from './constants';

export const composeTitle = (title?: string) => {
  return title ? `${title} | ${name}` : `${name} - ${tagline}`;
};
