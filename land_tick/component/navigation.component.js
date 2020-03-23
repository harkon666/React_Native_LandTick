import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './drawer.component';
import {Login} from './login.component';
import {Landing} from './landing.component';
import {AutocompleteSimpleUsageShowcase} from './findTicket.component';
import {Profile} from './profile.component';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Drawer" component={DrawerNavigator} />
    <Stack.Screen
      name="FindTicket"
      component={AutocompleteSimpleUsageShowcase}
    />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
