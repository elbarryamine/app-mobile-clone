import React from 'react';
import {Box, Divider, Heading, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SignUpForm} from '../components/signform';
import {SignUpAlternative} from '../components/sign-alternatives';

export function Signup() {
  return (
    <Box p="5" bg="background" h="100%">
      <HStack alignItems="center">
        <Heading>Sign up</Heading>
        <Icon name="login" size={30} color="black" />
      </HStack>
      <SignUpAlternative />
      <Divider bg="subDarker" mt="10" />
      <SignUpForm />
    </Box>
  );
}
