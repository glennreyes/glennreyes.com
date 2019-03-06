import { Router as RawRouter } from '@reach/router';
import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

const Router = styled(props => <Box as={RawRouter} mx="auto" {...props} />)`
  height: 100%;
`;

export default Router;
