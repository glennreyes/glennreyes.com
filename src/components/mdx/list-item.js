import styled from 'styled-components';
import React from 'react';
import { inlineCodeStyles } from './code';
import Text from '../text';

const ListItem = styled(props => <Text {...props} as="li" />)`
  ${inlineCodeStyles}
`;

export default ListItem;
