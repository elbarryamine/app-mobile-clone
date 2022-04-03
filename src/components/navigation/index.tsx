// import IHomeF from '@assets/images/home_focus';
// import ILibF from '@assets/images/library_focus';
// import IShortF from '@assets/images/shorts_focus';
// import ISubF from '@assets/images/subscriptions_focus';

import React from 'react';
import IHome from '@assets/images/home';
import ILib from '@assets/images/library';
import IShort from '@assets/images/shorts';
import ISub from '@assets/images/subscriptions';
// import IDot from '@assets/images/dot';
import {Flex, Icon, Text, View} from 'native-base';
import {Animated, Dimensions, Easing, StyleSheet, TouchableOpacity} from 'react-native';

export function TabNavigation() {
  const [animate, setAnimate] = React.useState<boolean>(false);

  return (
    <View h="100%" w="100%" position="relative">
      <TouchableOpacity onPress={() => setAnimate(!animate)}>
        <Text>Start</Text>
      </TouchableOpacity>
      <Flex
        position="absolute"
        bottom="0"
        align="center"
        justify="space-between"
        w="100%"
        h="50px"
        px="25px"
        borderTopWidth="1px"
        borderTopColor="gray.100"
        flexDirection="row">
        {icons.map((ic, i) => (
          <IconAnimator key={i} as={ic.component} index={i} shouldAnimate={animate} />
        ))}
      </Flex>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
function IconAnimator({
  as,
  index,
  shouldAnimate,
}: {
  as: any;
  index: number;
  shouldAnimate: boolean;
}) {
  const toX = ((3 - index - 1) * width) / 4;
  const toY = -height / 2;
  const [isTransAnimationEnded, setTransAnimationEnded] = React.useState<boolean>(false);
  const [isLoadingFinishing, setIsLoadingFinishing] = React.useState<boolean>(false);

  const ref = React.useRef(null);
  const transAnimXAfterLoading = React.useRef(new Animated.Value(0)).current;
  const transAnimYAfterLoading = React.useRef(new Animated.Value(0)).current;
  const transAnimX = React.useRef(new Animated.Value(0)).current;
  const transAnimY = React.useRef(new Animated.Value(0)).current;
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  function startAnimating() {
    Animated.parallel([
      Animated.timing(transAnimY, {
        useNativeDriver: true,
        toValue: 1,
        duration: 900,
        delay: index * 100,
        easing: Easing.linear,
      }),
      Animated.timing(transAnimX, {
        useNativeDriver: true,
        toValue: 1,
        duration: 900,
        delay: index * 100,
        easing: Easing.linear,
      }),
    ]).start(({finished}) => {
      if (finished) {
        setTransAnimationEnded(true);
        Animated.loop(
          Animated.timing(rotateAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 1400,
            easing: Easing.linear,
          }),
        ).start();
      }
    });
  }

  function stopAnimating() {
    let id;
    id = rotateAnim.addListener(function ({value}) {
      if (value >= 0.49 && value <= 0.51) {
        setIsLoadingFinishing(true);
        rotateAnim.stopAnimation();
        Animated.parallel([
          Animated.timing(transAnimYAfterLoading, {
            useNativeDriver: true,
            toValue: 1,
            duration: 900,
            easing: Easing.linear,
          }),
          Animated.timing(transAnimXAfterLoading, {
            useNativeDriver: true,
            toValue: 1,
            duration: 900,
            easing: Easing.linear,
          }),
        ]).start();
        rotateAnim.removeListener(id);
      }
    });
  }
  React.useEffect(() => {
    if (shouldAnimate) {
      startAnimating();
    }
    if (!shouldAnimate && isTransAnimationEnded) stopAnimating();
  }, [shouldAnimate]);

  const transformBefore = isTransAnimationEnded ? [{translateX: toX - 50}, {translateY: toY}] : [];
  const transformAfterLoading = isLoadingFinishing
    ? [
        {
          translateX: transAnimXAfterLoading.interpolate({
            inputRange: [0, 1],
            outputRange: [0, toX],
          }),
        },
        {
          translateY: transAnimYAfterLoading.interpolate({
            inputRange: [0, 1],
            outputRange: [0, toY],
          }),
        },
        {
          rotate: transAnimXAfterLoading.interpolate({
            inputRange: [0, 1],
            outputRange: ['-180deg', '180deg'],
          }),
        },
      ]
    : [];
  const transformAfter = isTransAnimationEnded
    ? [{translateX: 50}, {translateY: 0}]
    : [
        {translateX: transAnimX.interpolate({inputRange: [0, 1], outputRange: [0, toX]})},
        {translateY: transAnimY.interpolate({inputRange: [0, 1], outputRange: [0, toY]})},
      ];
  return (
    <Animated.View
      ref={ref}
      style={{
        ...styles.iconContainer,
        transform: [
          ...transformBefore,
          {
            rotate: rotateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-360deg'],
            }),
          },
          ...transformAfter,
          ...transformAfterLoading,
        ],
      }}>
      <Animated.View
        style={{
          ...styles.icon,
        }}>
        <Icon as={as} />
      </Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    height: 25,
    width: 50,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const icons = [
  {component: <IHome />},
  {component: <ILib />},
  {component: <IShort />},
  {component: <ISub />},
];
