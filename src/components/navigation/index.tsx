import React from 'react';
import {View, Flex, Icon} from 'native-base';
type Props = any;
import IconHome from '@assets/images/home.svg';
import IconFocusHome from '@assets/images/home_focus.svg';
import {} from '@features/home/screen';

export function TabNavigation({}: Props) {
  return (
    <View h="0" alignItems="center" position="relative">
      <Flex
        borderRadius="3xl"
        position="absolute"
        bottom="20px"
        h="80px"
        bg="white"
        w="90%"
        align="center"
        justify="space-evenly"
        flexDirection="row">
        <Icon as={<IconHome />} />
      </Flex>
    </View>
  );
}
