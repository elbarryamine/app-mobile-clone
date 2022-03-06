import React, {ReactNode} from 'react';
import {Box} from 'native-base';

type Props = {
  children: ReactNode;
};
export default function Screen(props: Props) {
  return (
    <Box bg="background" p="5" h="100%" w="100%">
      {props.children}
    </Box>
  );
}
