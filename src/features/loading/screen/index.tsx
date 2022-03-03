import {Center, Flex, Spinner, Text} from 'native-base';
import React from 'react';

export function LoadingScreen() {
  return (
    <Center h="100%" bg="white">
      <Flex flexDirection="row" align="center">
        <Spinner color="primary" />
        <Text ml={5} color="primary" fontSize="sub">
          loading
        </Text>
      </Flex>
    </Center>
  );
}
