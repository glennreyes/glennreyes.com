import { slugger } from './src/utils';

export const onRouteUpdate = () => {
  slugger.reset();
};
