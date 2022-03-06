import React from 'react';
import {Center, Flex, Spinner, Text} from 'native-base';
import Screen from '../../../components/screen';

export function LoadingScreen() {
  return (
    <Screen>
      <Center h="100%" bg="white">
        <Flex flexDirection="row" align="center">
          <Spinner color="primary" />
          <Text ml={5} color="primary" fontSize="sub">
            loading
          </Text>
        </Flex>
      </Center>
    </Screen>
  );
}
