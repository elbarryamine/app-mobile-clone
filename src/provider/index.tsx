import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from '@utils/theme';

type Props = {
  children: React.ReactElement;
};

export function AppProviders(props: Props) {
  return (
    <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
  );
}
