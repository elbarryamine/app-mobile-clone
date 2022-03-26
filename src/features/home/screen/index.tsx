import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
} from 'native-base';
import IBell from '@assets/images/bell';
import ISearch from '@assets/images/search';

export function HomeScreen() {
  return (
    <Box>
      <HomeHeader />
      <HomeVideosList />
    </Box>
  );
}

function HomeHeader() {
  return (
    <Flex
      h="50px"
      px="20px"
      flexDirection="row"
      align="center"
      justify="space-between"
      shadow="base"
      bg="white"
      borderBottomWidth="0.5px"
      borderBottomColor="#CECECE">
      <Avatar
        source={{
          uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        size="sm"
      />
      <Flex flexDirection="row" align="center" justify="space-between" w="80px">
        <Icon as={<ISearch />} />
        <Icon as={<IBell />} />
      </Flex>
    </Flex>
  );
}

type Video = {
  title: string;
  imageurl: string;
  viewsCount: string;
  date: string;
  youtuberName: string;
  youtuberImage: string;
  length: string;
};
const videos: Video[] = [
  {
    title: 'I use Arch on an M1 MacBook, btw',
    imageurl:
      'https://i.ytimg.com/vi/j_I9nkpovCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1W59Ld83WDeZ6BOaJGrkOIu6PpA',
    viewsCount: '14K views',
    date: '35 minutes ago',
    youtuberName: 'FireShip',
    youtuberImage:
      'https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj',
    length: '10:40',
  },
  {
    title:
      'THE BATMAN Movie Clip - Iceberg Lounge Club Fight (2022) by Entertainment Access 11 days ago 3 minutes, 43 seconds 918,074 views',
    imageurl:
      'https://i.ytimg.com/vi/b5j1H5k8fkw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxPHiPqgQEp6UinnVonEM6GJFWTQ',
    viewsCount: '918K views',
    date: '11 days ago',
    youtuberName: 'Entertainment Access',
    youtuberImage:
      'https://yt3.ggpht.com/sN2N-JE-UzsluDUcSFc5sUQReX1V9ajpzhbtjFsh4tGlQNOP9aVFMDDclzmAzmNxMKSMaM8h=s68-c-k-c0x00ffffff-no-rj',
    length: '25:38',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    imageurl:
      'https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CLTM_ZEG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_JjmVxTWrfdVdSKJUli6iGHuwKA',
    viewsCount: '918K views',
    date: '1 year ago',
    youtuberName: 'Lofi Girl',
    youtuberImage:
      'https://yt3.ggpht.com/qXwJcIl7ufH0x8skbCBBdACHCgRKuPxXRIR3AQCBxNolUiQ0OwOEdK3Qo9p7tiTGBAzq0nY0430=s68-c-k-c0x00ffffff-no-rj',
    length: '15:40',
  },
  {
    title: 'Picking up quest items in games - Flowers',
    imageurl:
      'https://i.ytimg.com/vi/5pMrKj9AAm4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlgUnYDf0ncKxjsmRhBLqAoaVvFQ',
    viewsCount: '643K views',
    date: '3 year ago',
    youtuberName: 'Viva La Dirt League',
    youtuberImage:
      'https://yt3.ggpht.com/ytc/AKedOLSa0_hSMv21A3SfQ6eJMDq5rDbjm_qeEtrwqY5DGA=s48-c-k-c0x00ffffff-no-rj',
    length: '19:18',
  },
];
function HomeVideosList() {
  return (
    <Box bg="white">
      <ScrollView py="20px" showsVerticalScrollIndicator={false}>
        {videos.map((video, i) => (
          <YoutubeVideoOverview key={i} video={video} />
        ))}
        <Box h="250px" w="100%" />
      </ScrollView>
    </Box>
  );
}

function YoutubeVideoOverview({video}: {video: Video}) {
  return (
    <Flex px="20px" bg="white" pb="20px">
      <Flex position="relative">
        <Flex
          pb="2px"
          px="5px"
          bg="rgba(0,0,0,0.9)"
          position="absolute"
          bottom="5px"
          left="5px"
          zIndex="10">
          <Text fontSize="tiny">{video.length}</Text>
        </Flex>
        <Image
          borderRadius="md"
          overflow="hidden"
          source={{uri: video.imageurl}}
          h="180px"
          w="100%"
          alt="thumbnail"
        />
      </Flex>
      <Flex px="5px">
        <Heading color="black" fontSize="tiny" noOfLines={1} pt="7px">
          {video.title.slice(0, 80)}
        </Heading>
        <Flex
          flexDirection="row"
          align="center"
          w="50%"
          justify="space-between">
          <Text color="gray.500" fontSize="micro">
            {video.viewsCount} views
          </Text>
          <Text color="gray.500" fontSize="micro">
            {video.date}
          </Text>
        </Flex>
        <Flex mt="7px" flexDirection="row" align="center">
          <Avatar source={{uri: video.youtuberImage}} size="sm" mr="10px" />
          <Text fontSize="tiny" color="black" fontWeight="700">
            {video.youtuberName}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
