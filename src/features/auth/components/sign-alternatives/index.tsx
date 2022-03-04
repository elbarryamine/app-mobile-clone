import React from 'react';
import {Box, Button, Flex, HStack, IButtonProps, Text} from 'native-base';
import GoogleSvg from '../../../../assets/images/google-icon.svg';
import FacebookSvg from '../../../../assets/images/facebook-icon.svg';

export function SignInAlternative() {
  return (
    <Flex w="100%" justify="space-between" mt="10">
      <GoogleButton>Sign in to Tale with Google</GoogleButton>
      <FacebookButton>Sign in to Tale with Facebook</FacebookButton>
    </Flex>
  );
}

export function SignUpAlternative() {
  return (
    <Flex w="100%" justify="space-between" mt="10">
      <GoogleButton>Sign up to Tale with Google</GoogleButton>
      <FacebookButton>Sign up to Tale with Facebook</FacebookButton>
    </Flex>
  );
}

function GoogleButton(props: IButtonProps) {
  return (
    <Button bg="white" borderWidth="1" borderColor="gray.100" h="10" {...props}>
      <HStack space="2">
        <Box>
          <GoogleSvg width={20} height={20} />
        </Box>
        <Text fontSize="sub" lineHeight={20}>
          {props.children}
        </Text>
      </HStack>
    </Button>
  );
}
function FacebookButton(props: IButtonProps) {
  return (
    <Button
      bg="#3498DB"
      borderWidth="1"
      borderColor="gray.100"
      h="10"
      mt="5"
      {...props}>
      <HStack space="2">
        <Box>
          <FacebookSvg width={20} height={20} />
        </Box>
        <Text color="white" fontSize="sub" lineHeight={20}>
          {props.children}
        </Text>
      </HStack>
    </Button>
  );
}
