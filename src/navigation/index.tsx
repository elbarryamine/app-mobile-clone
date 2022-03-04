import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Screens
import Discover from '../features/discover/screen';
import {Auth} from './auth';
import {Main} from './main';
import {LoadingScreen} from '../features/loading/screen';
//

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
      <Stack.Navigator initialRouteName="auth">
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
        <Stack.Screen options={{headerShown: false}} name="main">
          {(props: NativeStackHeaderProps) => (
            <Protect navigation={props.navigation}>
              <Main {...props} />
            </Protect>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type ProtectProps = {
  children: React.ReactElement;
  navigation: NativeStackHeaderProps['navigation'];
};
function Protect(props: ProtectProps) {
  let isAuth = false;
  if (isAuth) {
    return props.children;
  } else {
    props.navigation.push('auth-login');
    return null;
  }
}
