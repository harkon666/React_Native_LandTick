import React from 'react';
import {
  Icon,
  Text,
  Layout,
  TopNavigationAction,
  TopNavigation,
} from '@ui-kitten/components';
import {DrawerActions} from '@react-navigation/native';

export const ListTopNav = ({navigation}) => {
  const UserIcon = style => (
    <Icon {...style} fill="#f2f2f2" name="person-outline" />
  );
  const iconRef = React.createRef();

  const ForwardIcon = style => (
    <Icon
      ref={iconRef}
      fill="#f2f2f2"
      {...style}
      name={'arrow-forward-outline'}
    />
  );

  const UserAction = () => (
    <TopNavigationAction
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      icon={UserIcon}
    />
  );

  const FindTicket = () => (
    <Layout
      style={{flexDirection: 'row', backgroundColor: '#3366FF'}}
      onTouchStart={() => {
        navigation.navigate('FindTicket');
        iconRef.current.startAnimation();
      }}>
      <Text category="h6" style={{color: '#f2f2f2'}}>
        Cari Ticket
      </Text>
      <TopNavigationAction icon={ForwardIcon} />
    </Layout>
  );

  return (
    <TopNavigation
      style={{backgroundColor: '#3366FF'}}
      leftControl={UserAction()}
      rightControls={FindTicket()}
    />
  );
};

export const TopNav = ({navigation}) => {
  const UserIcon = style => (
    <Icon {...style} fill="#f2f2f2" name="person-outline" />
  );

  const UserAction = () => (
    <TopNavigationAction
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      icon={UserIcon}
    />
  );

  return (
    <TopNavigation
      style={{backgroundColor: '#3366FF'}}
      leftControl={UserAction()}
    />
  );
};
