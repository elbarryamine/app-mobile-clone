import React from 'react';
import {Box, Divider, Heading, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SignInForm} from '../components/signform';
import {SignInAlternative} from '../components/sign-alternatives';

export function Login() {
  return (
    <Box p="5" bg="background" h="100%">
      <HStack alignItems="center">
        <Heading>Log in</Heading>
        <Icon name="login" size={30} color="black" />
      </HStack>
      <SignInAlternative />
      <Divider bg="subDarker" mt="10" />
      <SignInForm />
    </Box>
  );
}
