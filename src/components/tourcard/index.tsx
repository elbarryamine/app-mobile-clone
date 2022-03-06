import React from 'react';
import {Heading, Text, Box, Flex, Center} from 'native-base';
import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {Overlay} from '../overlay';

type Props = {
  tour: any;
};
const {width, height} = Dimensions.get('window');
export function TourCard({}: Props) {
  return (
    <Center
      borderRadius="8"
      overflow="hidden"
      mr="5"
      h={(height * 30) / 100}
      w={width - (width * 30) / 100}>
      <Box bg="transparent" h="100%" w="100%">
        <TouchableOpacity activeOpacity={0.9}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/quad.jpg')}>
            <Box h="100%" w="100%" position="relative">
              <Overlay />
              <Flex h="100%" justify="space-between" p="2">
                <Heading fontSize="header" color="white" fontWeight="500">
                  Quad tour in marrakech with breakfast
                </Heading>
                <Flex justify="space-between" flexDirection="row">
                  <Text color="sub" fontWeight="500" fontSize="sub">
                    5.5
                  </Text>
                  <Text
                    // alignSelf="flex-end"
                    color="sub"
                    fontWeight="500"
                    fontSize="sub">
                    Marrakech
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </ImageBackground>
        </TouchableOpacity>
      </Box>
    </Center>
  );
}
