import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from '../utils/theme';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

type Props = {
  children: React.ReactElement;
};
const client = new ApolloClient({
  uri: 'http://ec2-18-156-194-231.eu-central-1.compute.amazonaws.com/graphql',
  cache: new InMemoryCache(),
});
export function AppProviders(props: Props) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
      </ApolloProvider>
    </Provider>
  );
}
