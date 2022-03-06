import {Box} from 'native-base';
import React from 'react';

export function Overlay() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      h="100%"
      w="100%"
      bg="rgba(0,0,0,0.4)"
    />
  );
}
