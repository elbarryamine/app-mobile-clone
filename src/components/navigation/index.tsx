import React from 'react';
import {View, Flex, Icon, IIconProps, Text, Button} from 'native-base';
type Props = any;
import IHome from '@assets/images/home';
import IHomeF from '@assets/images/home_focus';
import ILib from '@assets/images/library';
import ILibF from '@assets/images/library_focus';
import IShort from '@assets/images/shorts';
import IShortF from '@assets/images/shorts_focus';
import ISub from '@assets/images/subscriptions';
import ISubF from '@assets/images/subscriptions_focus';
import {Animated, StyleSheet} from 'react-native';

export function TabNavigation({}: Props) {
  const [focusedIndex, setFocusedIndex] = React.useState<number>(0);
  return (
    <View
      h="0"
      alignItems="center"
      position="relative"
      px="20px"
      bg="transparent">
      <Flex
        px="5px"
        position="absolute"
        bottom="20px"
        h="80px"
        bg="white"
        borderRadius="full"
        borderColor="#CECECE"
        borderWidth="0.5px"
        w="100%"
        align="center"
        justify="space-evenly"
        flexDirection="row">
        {icons.map(({icon, focusIcon, name}, icIndex) => (
          <IconWrapper
            key={icIndex}
            name={name}
            isFocused={focusedIndex === icIndex}
            icons={[icon, focusIcon]}
            onPress={() => setFocusedIndex(icIndex)}
          />
        ))}
      </Flex>
    </View>
  );
}

type IconWrapperProps = {
  name: string;
  isFocused: boolean;
  icons: any[];
};
function IconWrapper({
  isFocused,
  icons,
  name,
  ...props
}: IIconProps & IconWrapperProps) {
  const iconWrapperAnimate = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const sharedConfig = {speed: 14, bounciness: 20, useNativeDriver: true};
    if (isFocused) {
      Animated.spring(iconWrapperAnimate, {
        toValue: 1,
        ...sharedConfig,
      }).start();
    }
    if (!isFocused) {
      Animated.spring(iconWrapperAnimate, {
        toValue: 0,
        ...sharedConfig,
      }).start();
    }
  }, [isFocused]);
  return (
    <Button {...props} position="relative" w="1/4" bg="transparent">
      <Flex align="center" justify="center" position="relative">
        <Animated.View
          style={{
            transform: [
              {
                translateY: iconWrapperAnimate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, -5],
                }),
              },
            ],
            opacity: iconWrapperAnimate.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 0.5, 1],
            }),
          }}>
          <Icon as={isFocused ? icons[1] : icons[0]} />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.animatedText,
            opacity: iconWrapperAnimate,
            transform: [
              {
                translateY: iconWrapperAnimate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, -8],
                }),
              },
            ],
          }}>
          <Text
            textAlign="center"
            color="black"
            fontSize="micro"
            fontWeight="700"
            textTransform="uppercase"
            w="100px">
            {name}
          </Text>
        </Animated.View>
      </Flex>
    </Button>
  );
}

const icons = [
  {icon: <IHome />, focusIcon: <IHomeF />, name: 'Home'},
  {icon: <ILib />, focusIcon: <ILibF />, name: 'Library'},
  {icon: <IShort />, focusIcon: <IShortF />, name: 'Shorts'},
  {icon: <ISub />, focusIcon: <ISubF />, name: 'Subscription'},
];

const styles = StyleSheet.create({
  animatedText: {
    position: 'absolute',
    bottom: '-70%',
  },
});
