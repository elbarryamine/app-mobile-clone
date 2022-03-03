import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import Discover from '../features/discover/screen';
import {Auth} from './auth';
import {Main} from './main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingScreen} from '../features/loading/screen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [visitedDiscover, setVisitedDiscover] = React.useState<boolean>(false);
  React.useEffect(() => {
    (async function () {
      const jsonValue = await AsyncStorage.getItem('@passedWelcomeScreen');
      const hasAlreadyVisitedDiscover =
        jsonValue != null ? JSON.parse(jsonValue) : null;
      if (hasAlreadyVisitedDiscover) {
        setVisitedDiscover(true);
      }
      setLoaded(true);
    })();
  }, []);
  if (!loaded) return <LoadingScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!visitedDiscover && (
          <Stack.Screen
            name="discover"
            component={Discover}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={Auth}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
