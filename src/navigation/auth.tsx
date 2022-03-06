import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup, Register} from '../features/auth/screen';
import {AuthNavigation} from '../components/navigation';

const Stack = createNativeStackNavigator();

export function Auth() {
  return (
    <Stack.Navigator initialRouteName="auth-register">
      <Stack.Screen
        name="auth-register"
        options={{headerShown: false}}
        component={Register}
      />
      <Stack.Screen
        name="auth-login"
        options={{
          header: props => <AuthNavigation {...props} />,
        }}
        component={Login}
      />
      <Stack.Screen
        name="auth-signup"
        options={{
          header: props => <AuthNavigation {...props} />,
        }}
        component={Signup}
      />
    </Stack.Navigator>
  );
}
