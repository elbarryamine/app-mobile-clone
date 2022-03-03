import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../features/home/screen';
import {SettingScreen} from '../../features/settings/screen';

const Tab = createBottomTabNavigator();
export function Main() {
  return (
    <Tab.Navigator initialRouteName="main-home">
      <Tab.Screen name="main-home" component={HomeScreen} />
      <Tab.Screen name="main-settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
