import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../../features/auth/screen';

const Stack = createNativeStackNavigator();

export function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="signup"
        options={{headerShown: false}}
        component={Signup}
      />
    </Stack.Navigator>
  );
}
