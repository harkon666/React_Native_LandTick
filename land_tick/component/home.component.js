import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
  Layout,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import {ThemeContext} from '../utils/theme-context';
import {TicketList} from './list.component';
import {ListTopNav, TicketTopNav} from './topNav.component';
import {MyTicket} from './myTicket.component';

export const HomeScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);
  const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

  const HomeIcon = style => <Icon {...style} name="home-outline" />;

  const BellIcon = style => <Icon {...style} name="bell-outline" />;

  const EmailIcon = style => <Icon {...style} name="email-outline" />;

  const ConditionalRender = () => {
    switch (bottomSelectedIndex) {
      case 0:
        return (
          <Layout>
            <ListTopNav navigation={navigation} />
            <TicketList />
          </Layout>
        );
      case 1:
        return (
          <Layout style={{flex: 1, alignContent: 'center'}}>
            <TicketTopNav />
            <MyTicket />
          </Layout>
        );
      default:
        return 'oke';
    }
  };

  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <React.Fragment>
      <SafeAreaView style={{flex: 1}}>
        <Layout
          style={{
            flex: 1,
          }}>
          {ConditionalRender(bottomSelectedIndex)}
        </Layout>
        <Layout>
          <BottomNavigation
            style={{marginVertical: 8}}
            selectedIndex={bottomSelectedIndex}
            onSelect={setBottomSelectedIndex}>
            <BottomNavigationTab title="HOME" icon={HomeIcon} />
            <BottomNavigationTab title="MY TICKET" icon={BellIcon} />
          </BottomNavigation>
        </Layout>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 256,
    padding: 16,
  },
  modalContainer: {
    alignSelf: 'flex-start',
    width: 256,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
