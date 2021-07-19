import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import OnBoarding from './app/screens/OnBoarding'
import Verify from './app/screens/Verify'
import Login from './app/screens/Login'
import Profile from './app/screens/Profile'

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="OnBoard" component={OnBoarding} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify" component={Verify} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
