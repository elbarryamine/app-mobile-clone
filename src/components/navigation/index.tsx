import React from 'react';
import {Button, Center, Flex, Icon, Text} from 'native-base';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {
  BottomTabBarProps,
  BottomTabHeaderProps,
} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export function AuthNavigation({navigation}: NativeStackHeaderProps) {
  return (
    <Center h={50} justifyItems="center" px="5%" bg="background">
      <Flex w="100%">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon name="arrow-left-thin" size={30} color="black" />
        </TouchableOpacity>
      </Flex>
    </Center>
  );
}

export function MainNavigation({navigation}: BottomTabHeaderProps) {
  return (
    <Center h={50} justifyItems="center" px="5%" bg="background">
      <Flex w="100%" flexDir="row" align="flex-end">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon name="setting" size={30} color="black" />
        </TouchableOpacity>
      </Flex>
    </Center>
  );
}
export function TabNavigation(props: BottomTabBarProps) {
  const {navigate} = useNavigation();
  const [activeRoute, setActiveRoute] = React.useState<number>(
    props.state.index ? props.state.index : 0,
  );
  const icons = [
    {iconName: 'home', title: 'Home', navigateTo: 'main-home'},
    {
      iconName: 'bells',
      title: 'Notifications',
      navigateTo: 'main-notifications',
    },
    {iconName: 'user', title: 'Account', navigateTo: 'main-settings'},
  ];
  return (
    <Center h="70" px="5" bg="background">
      <Flex
        borderRadius="5"
        w="100%"
        h="50"
        bg="white"
        flexDirection="row"
        align="center"
        justify="space-between"
        px="5">
        {icons.map((el, i) => {
          const color = activeRoute === i ? 'primary' : 'gray.800';
          return (
            <Button
              key={i}
              bg="transparent"
              onPress={() => {
                navigate(el.navigateTo as never);
                setActiveRoute(i);
              }}>
              <Flex align="center">
                <Icon
                  size="5"
                  color={color}
                  as={<AntIcon name={el.iconName} />}
                />
                <Text
                  fontFamily="rale"
                  fontSize="tiny"
                  color={color}
                  fontWeight="500">
                  {el.title}
                </Text>
              </Flex>
            </Button>
          );
        })}
      </Flex>
    </Center>
  );
}
