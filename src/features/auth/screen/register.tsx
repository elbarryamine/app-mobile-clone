import React from 'react';
import {Box, Center, HStack, Text} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import ExploringSvg from '../../../assets/images/carousel-exploring.svg';
import PaymentSvg from '../../../assets/images/carousel-payment.svg';

type DataItem = {
  image: any;
  subHeader: string;
  header: string;
};
const {width} = Dimensions.get('window');
const data: Array<DataItem> = [
  {
    header: 'Plan your trip',
    subHeader: 'Custom and fast planning',
    image: <ExploringSvg width={width / 2} height={width / 2} />,
  },
  {
    header: 'Pay as you like',
    subHeader: 'A little worried pay when your adventure starts',
    image: <PaymentSvg width={width / 2} height={width / 2} />,
  },
  {
    header: 'Plan your trip',
    subHeader: 'Custom and fast planning',
    image: <ExploringSvg width={width / 2} height={width / 2} />,
  },
];
export function Register() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState<number>(0);
  return (
    <Box w="100%" h="100%" bg="white">
      <Center h="45%" mt="10%">
        <Carousel
          ref={ref}
          data={data}
          renderItem={CarouselItem}
          sliderWidth={width}
          itemWidth={width}
          disableVirtualization={true}
          onSnapToItem={(index: number) => setActive(index)}
        />
        <HStack space={2}>
          {data.map((_, index) => (
            <Box
              key={index}
              bg={active >= index ? 'primary' : 'transparent'}
              h={2}
              w={2}
              borderWidth={1}
              borderColor="primary"
              borderRadius={10}
            />
          ))}
        </HStack>
      </Center>
    </Box>
  );
}

function CarouselItem({item}: {item: DataItem; index: number}) {
  return (
    <Center bg="white" shadow="base" py="10%">
      {item.image}
      <Text>{item.header}</Text>
      <Text fontSize="sub" color="subDarker">
        {item.subHeader}
      </Text>
    </Center>
  );
}
