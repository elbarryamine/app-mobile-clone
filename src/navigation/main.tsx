import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@features/home/screen';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TabNavigation} from '@components/navigation';

const Tab = createBottomTabNavigator();
export function Main({}: NativeStackHeaderProps) {
  return (
    <Tab.Navigator
      initialRouteName="main-home"
      tabBar={props => <TabNavigation {...props} />}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="calls"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="story"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="camera"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="account"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
