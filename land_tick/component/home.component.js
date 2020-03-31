import React from 'react';
import {Image, ScrollView, ImageBackground, StyleSheet} from 'react-native';
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
  const CardHeader1 = () => (
    <Image
      style={{width: 350, height: 100}}
      source={require('../images/tiket-promo.jpg')}
    />
  );
  const CardHeader2 = () => (
    <Image
      style={{width: 350, height: 100}}
      source={require('../images/tiket-promo2.jpeg')}
    />
  );

  return (
    <React.Fragment>
      <TopNav navigation={navigation} />
      <Layout style={{paddingHorizontal: 5, paddingVertical: 8, marginTop: 3}}>
        <Text style={{marginLeft: 5, fontWeight: 'bold'}} category="h3">
          Promo
        </Text>
        <Layout style={{flexDirection: 'row', marginVertical: 10}}>
          <ScrollView horizontal={true}>
            <Card
              style={{width: 350, marginHorizontal: 5}}
              header={CardHeader1}>
              <Text category="h5">Promo HUT KAI</Text>
            </Card>
            <Card style={{width: 350}} header={CardHeader2}>
              <Text category="h5">Travel Fair</Text>
            </Card>
          </ScrollView>
        </Layout>
      </Layout>
      <Layout style={{paddingHorizontal: 5, paddingVertical: 8, marginTop: 15}}>
        <Text style={{marginLeft: 5, fontWeight: 'bold'}} category="h3">
          Destinasi Favorit
        </Text>
        <Layout style={{flexDirection: 'row', marginVertical: 10}}>
          <ScrollView horizontal={true}>
            {/* bila ada data nanti ini bisa menggunakan looping agar gak boros*/}
            <ImageBackground
              style={style.imageBackground}
              source={require('../images/bandung.jpeg')}>
              <Text style={style.imageBackgroundText} category="h5">
                Bandung
              </Text>
            </ImageBackground>
            <ImageBackground
              style={style.imageBackground}
              source={require('../images/jakarta.jpeg')}>
              <Text style={style.imageBackgroundText} category="h5">
                Jakarta
              </Text>
            </ImageBackground>
            <ImageBackground
              style={style.imageBackground}
              source={require('../images/surabaya.jpeg')}>
              <Text style={style.imageBackgroundText} category="h5">
                surabaya
              </Text>
            </ImageBackground>
            <ImageBackground
              style={style.imageBackground}
              source={require('../images/jogja.jpeg')}>
              <Text style={style.imageBackgroundText} category="h5">
                Jogja
              </Text>
            </ImageBackground>
          </ScrollView>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

const HomeTab = ({navigation, state}) => {
  // const themeContext = React.useContext(ThemeContext);

  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  const HomeIcon = style => <Icon {...style} name="home-outline" />;

  const BellIcon = style => <Icon {...style} name="bell-outline" />;

  const BriefcaseIcon = style => <Icon {...style} name="briefcase-outline" />;

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

const style = StyleSheet.create({
  imageBackgroundText: {
    alignSelf: 'center',
    marginBottom: 15,
    color: 'white',
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: 'black',
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: 150,
    height: 150,
    flexDirection: 'column-reverse',
    marginHorizontal: 5,
  },
});
