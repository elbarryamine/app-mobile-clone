import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../features/home/screen';
import {SettingScreen} from '../features/settings/screen';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {MainNavigation, TabNavigation} from '../components/navigation';
import {NotificationScreen} from '../features/notification/screen';

const Tab = createBottomTabNavigator();
export function Main({}: NativeStackHeaderProps) {
  return (
    <Tab.Navigator
      initialRouteName="main-home"
      tabBar={props => <TabNavigation {...props} />}>
      <Tab.Screen
        name="main-home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="main-notifications"
        component={NotificationScreen}
        options={{header: props => <MainNavigation {...props} />}}
      />
      <Tab.Screen
        name="main-settings"
        component={SettingScreen}
        options={{header: props => <MainNavigation {...props} />}}
      />
    </Tab.Navigator>
  );
}
