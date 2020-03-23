import React from 'react';
import {Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Layout,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text,
  Card,
} from '@ui-kitten/components';
import {ThemeContext} from '../utils/theme-context';
import {TicketList} from './list.component';
import {MyTicket} from './myTicket.component';
import {TopNav} from './topNav.component';

const BottomTab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  const CardHeader = () => (
    <Image
      style={{width: 350, height: 100}}
      source={require('../images/tiket-promo.jpg')}
    />
  );

  return (
    <React.Fragment>
      <TopNav navigation={navigation} />
      <Layout style={{paddingHorizontal: 5, paddingVertical: 8, marginTop: 3}}>
        <Text category="h3">Promo</Text>
        <Layout style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Card style={{width: 350, marginHorizontal: 5}} header={CardHeader}>
              <Text category="h4">Promo HUT KAI</Text>
            </Card>
            <Card style={{width: 350}} header={CardHeader}>
              <Text category="h4">Promo HUT KAI</Text>
            </Card>
          </ScrollView>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

const HomeTab = ({navigation, state}) => {
  const themeContext = React.useContext(ThemeContext);

  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  const HomeIcon = style => <Icon {...style} name="home-outline" />;

  const BellIcon = style => <Icon {...style} name="bell-outline" />;

  const BriefcaseIcon = style => <Icon {...style} name="briefcase-outline" />;

  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <React.Fragment>
      <SafeAreaView>
        <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
          <BottomNavigationTab title="HOME" icon={HomeIcon} />
          <BottomNavigationTab title="TICKET" icon={BriefcaseIcon} />
          <BottomNavigationTab title="MY TICKET" icon={BellIcon} />
        </BottomNavigation>
      </SafeAreaView>
    </React.Fragment>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <HomeTab {...props} />}>
    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="TicketList" component={TicketList} />
    <BottomTab.Screen name="MyTicket" component={MyTicket} />
  </BottomTab.Navigator>
);

export const BottomTabNavigator = () => <TabNavigator />;
