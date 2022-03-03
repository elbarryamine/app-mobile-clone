import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../features/home/screen';
import {SettingScreen} from '../../features/settings/screen';

const Tab = createBottomTabNavigator();
export function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Messages" component={SettingScreen} />
    </Tab.Navigator>
  );
}
