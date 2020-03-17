import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './home.component';
import {DetailsScreen} from './details.component';
import {Login} from './login.component';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
