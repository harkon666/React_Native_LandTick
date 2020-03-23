import React from 'react';
import {
  Layout,
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = style => <Icon {...style} name="arrow-back" />;

const PersonIcon = () => (
  <Icon width={100} height={100} fill="#3366FF" name="person-outline" />
);

const CreditCard = () => (
  <Icon width={50} height={50} fill="#3366FF" name="credit-card-outline" />
);

export const Profile = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const TopNavigationSimple = () => (
    <TopNavigation
      leftControl={BackAction()}
      alignment="center"
      title="My Account"
    />
  );

  return (
    <React.Fragment>
      <TopNavigationSimple />
      <Layout
        style={{
          alignSelf: 'center',
          marginVertical: 3,
          width: '98%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <PersonIcon />
        <Text style={{fontWeight: 'bold'}} category="h5">
          Bryan Dewa Wicaksana
        </Text>
      </Layout>
      <Layout style={{flex: 1, marginTop: 1}}>
        <Layout
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Layout style={{flex: 2, alignItems: 'flex-end'}}>
            <CreditCard />
          </Layout>
          <Layout style={{flex: 4}}>
            <Text category="h3"> : Rp. 500.000</Text>
          </Layout>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};
