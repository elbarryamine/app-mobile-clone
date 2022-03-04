import {Box, Divider, HStack, Text} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SignInAlternative} from '../components/signin-alternatives';

export function Login() {
  return (
    <Box p="5" bg="white" h="100%">
      <HStack alignItems="center">
        <Text fontSize="display" fontWeight="900">
          Log in
        </Text>
        <Icon name="login" size={30} color="black" />
      </HStack>
      <SignInAlternative />
      <Divider bg="subDarker" mt="10" />
    </Box>
  );
}
