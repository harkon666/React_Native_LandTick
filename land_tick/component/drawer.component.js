import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer, DrawerHeaderFooter, Icon} from '@ui-kitten/components';
import {BottomTabNavigator} from './home.component';
import {ThemeContext} from '../utils/theme-context';

const DrawerNav = createDrawerNavigator();

const PersonIcon = style => <Icon {...style} name="person" />;

const drawerData = [{title: 'Home'}, {title: 'Theme'}];

export const DrawerHeaderShowcase = ({navigation}) => {
  const onRouteSelect = index => {
    const route = drawerData[index];
    // navigate with React Navigation
    // this.props.navigation.navigate(route.title);
  };

  const themeContext = React.useContext(ThemeContext);

  const Header = () => (
    <DrawerHeaderFooter
      title="Bryan Dewa Wicaksana"
      description="React Native Developer"
      icon={PersonIcon}
      onPress={() => navigation.navigate('Profile')}
    />
  );

  return (
    <SafeAreaView>
      <Drawer data={drawerData} header={Header} onSelect={onRouteSelect} />
    </SafeAreaView>
  );
};

export const DrawerNavigator = ({navigation}) => (
  <DrawerNav.Navigator
    drawerContent={props => (
      <DrawerHeaderShowcase navigation={navigation} {...props} />
    )}>
    <DrawerNav.Screen name="Home" component={BottomTabNavigator} />
  </DrawerNav.Navigator>
);
