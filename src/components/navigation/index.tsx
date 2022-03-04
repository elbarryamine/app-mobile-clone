import React from 'react';
import {Center, Flex} from 'native-base';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

export function AuthNavigation({navigation}: NativeStackHeaderProps) {
  return (
    <Center h={50} justifyItems="center" px="5%" bg="white">
      <Flex w="100%">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left-thin" size={30} color="black" />
        </TouchableOpacity>
      </Flex>
    </Center>
  );
}
