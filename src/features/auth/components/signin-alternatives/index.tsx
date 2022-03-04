import React from 'react';
import {Box, Button, Flex, HStack, Text} from 'native-base';
import GoogleSvg from '../../../../assets/images/google-icon.svg';
import FacebookSvg from '../../../../assets/images/facebook-icon.svg';

export function SignInAlternative() {
  return (
    <Flex w="100%" justify="space-between" mt="10">
      <Button bg="white" borderWidth="1" borderColor="gray.100" h="10">
        <HStack space="2">
          <Box>
            <GoogleSvg width={20} height={20} />
          </Box>
          <Text fontSize="sub" lineHeight={20}>
            Sign in to Tale with Google
          </Text>
        </HStack>
      </Button>
      <Button bg="#3498DB" borderWidth="1" borderColor="gray.100" h="10" mt="5">
        <HStack space="2">
          <Box>
            <FacebookSvg width={20} height={20} />
          </Box>
          <Text color="white" fontSize="sub" lineHeight={20}>
            Sign in to Tale with Facebook
          </Text>
        </HStack>
      </Button>
    </Flex>
  );
}
