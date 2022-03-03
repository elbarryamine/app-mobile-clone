import React from 'react';
import {Box, Button, Center, Text, VStack} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageBackground} from 'react-native';

type Props = {
  navigation: any;
};
const Overlay = () => (
  <Box
    h="100%"
    w="100%"
    top="0"
    left="0"
    position="absolute"
    bg="primary"
    opacity="0.5"
  />
);
export default function Discover({navigation}: Props) {
  async function handleGettingStarted() {
    try {
      await AsyncStorage.setItem('@passedWelcomeScreen', JSON.stringify(true));
    } catch (e) {}
    navigation.push('auth');
  }
  return (
    <ImageBackground
      source={require('../../../assets/images/tourism.jpg')}
      resizeMode="cover">
      <VStack space={'5%'} position="relative" h="100%">
        <Overlay />
        <Center position="absolute" top="35%" w="100%">
          <Text color="textPrimary" fontSize="display" mt="5%">
            Welcome to Tale
          </Text>
          <Text color="sub" fontSize="tiny">
            Tale will help you discover the best adventure for you
          </Text>
        </Center>
        <Center position="absolute" bottom="20%" w="100%">
          <Button pb="4%" w="50%" mx="auto" onPress={handleGettingStarted}>
            <Text color="textPrimary">Lets Get Started</Text>
          </Button>
          <Text color="sub" fontSize="tiny">
            Click to continue
          </Text>
        </Center>
      </VStack>
    </ImageBackground>
  );
}
