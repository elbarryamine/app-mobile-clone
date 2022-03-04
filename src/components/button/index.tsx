import React from 'react';
import {Button, IButtonProps, Text} from 'native-base';

type Props = {
  title: string;
  size: string;
};
PrimaryButton.defaultProps = {
  size: 'header',
};
export function PrimaryButton({title, size, ...props}: Props & IButtonProps) {
  return (
    <Button w="100%" shadow="4" {...props}>
      <Text fontSize={size} color="white">
        {title}
      </Text>
    </Button>
  );
}
