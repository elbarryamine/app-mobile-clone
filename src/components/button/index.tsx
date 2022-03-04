import React from 'react';
import {Button, Text} from 'native-base';

type Props = {
  title: string;
  size: string;
};
PrimaryButton.defaultProps = {
  size: 'header',
};
export function PrimaryButton({title, size}: Props) {
  return (
    <Button w="100%" shadow="4">
      <Text fontSize={size} color="white">
        {title}
      </Text>
    </Button>
  );
}
