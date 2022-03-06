import React, {Fragment} from 'react';
import {
  Button,
  Center,
  FlatList,
  Flex,
  Heading,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import Screen from '../../../components/screen';
import {ImageBackground} from 'react-native';
import {TourCard} from '../../../components/tourcard';
import {Overlay} from '../../../components/overlay';

export function HomeScreen() {
  return (
    <Fragment>
      <ScrollView bg="background">
        <Header />
        <Screen>
          <Flex>
            <Heading>Popular tours</Heading>
          </Flex>
          <FlatList
            horizontal
            mt="5"
            data={['2', '5', '5']}
            renderItem={({item}) => <TourCard tour={item} />}
          />
        </Screen>
      </ScrollView>
    </Fragment>
  );
}

function Header() {
  return (
    <ImageBackground
      source={require('../../../assets/images/tourism.jpg')}
      resizeMode="cover">
      <Overlay />
      <VStack p="5" h={80} position="relative">
        <Center>
          <Input
            fontSize="tiny"
            fontWeight="500"
            px="4"
            rounded="full"
            w="90%"
            bg="white"
            placeholderTextColor="gray.400"
            placeholder="Search for your tour"
          />
        </Center>
        <Flex
          position="absolute"
          bottom="5"
          left="5"
          flexDirection="row"
          justify="space-between"
          align="center"
          w="100%">
          <Flex>
            <Heading color="textPrimary">Quad Tour</Heading>
            <Text fontSize="tiny" color="subDarker">
              Marrakech
            </Text>
          </Flex>
          <Button>VIEW IT NOW</Button>
        </Flex>
      </VStack>
    </ImageBackground>
  );
}
