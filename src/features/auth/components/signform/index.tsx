import React from 'react';
import {Box, Flex, FormControl, Icon, Input, Text} from 'native-base';
import {PrimaryButton} from '../../../../components/button';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export function SignInForm() {
  return (
    <Box mt="10">
      <FormControl>
        <FormControl.Label>
          <Text fontSize="sub" fontWeight="900">
            Email
          </Text>
        </FormControl.Label>
        <Input variant="outline" placeholder="Email Address" />
      </FormControl>
      <PasswordInput label="Password" />
      <Flex align="flex-end" py="5">
        <Text fontSize="sub" fontWeight="900">
          Forgot password ?
        </Text>
      </Flex>
      <PrimaryButton title="Login" size="header" />
    </Box>
  );
}
export function SignUpForm() {
  return (
    <Box mt="2">
      <FormControl>
        <FormControl.Label>
          <Text fontSize="sub" fontWeight="900">
            First nameZ
          </Text>
        </FormControl.Label>
        <Input variant="outline" placeholder="First name" />
      </FormControl>
      <FormControl>
        <FormControl.Label>
          <Text fontSize="sub" fontWeight="900">
            Last name
          </Text>
        </FormControl.Label>
        <Input variant="outline" placeholder="Last name" />
      </FormControl>
      <FormControl>
        <FormControl.Label>
          <Text fontSize="sub" fontWeight="900">
            Email
          </Text>
        </FormControl.Label>
        <Input variant="outline" placeholder="Email Address" />
      </FormControl>
      <PasswordInput label="Password" />
      <Flex align="flex-end" py="5">
        <Text fontSize="sub" fontWeight="900">
          Already have an account ?
        </Text>
      </Flex>
      <PrimaryButton title="Sign up" size="header" />
    </Box>
  );
}

type PasswordInputProps = {
  label: string;
};
function PasswordInput({label}: PasswordInputProps) {
  const [showPass, setShowPass] = React.useState<boolean>(false);

  return (
    <FormControl mt="2">
      <FormControl.Label>
        <Text fontSize="sub" fontWeight="900">
          {label}
        </Text>
      </FormControl.Label>
      <Input
        variant="outline"
        placeholder="Password"
        type={showPass ? 'password' : 'text'}
        InputRightElement={
          <Icon
            onPress={() => setShowPass(!showPass)}
            mr="2"
            as={
              <MaterialIcon
                name={showPass ? 'eye-off-outline' : 'eye-outline'}
              />
            }
            size={5}
          />
        }
      />
    </FormControl>
  );
}
