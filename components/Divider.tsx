import React, { useContext } from 'react';
import { Flex, FlexProps } from 'rebass';
import Line from './Line';
import Text from './Text';
import { ThemeContext } from './Theme';

const Divider: React.FC<FlexProps> = ({ children, ...props }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Flex justifyContent="center" {...props}>
      <Line darkMode={darkMode} />
      {children && (
        <Text
          color={darkMode ? 'blue' : 'gray'}
          fontSize={0}
          fontWeight="bold"
          mx={1}
        >
          {children}
        </Text>
      )}
      {children && <Line darkMode={darkMode} />}
    </Flex>
  );
};

export default Divider;
