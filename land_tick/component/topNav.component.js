import React from 'react';
import {
  Icon,
  Text,
  Layout,
  TopNavigationAction,
  TopNavigation,
} from '@ui-kitten/components';

export const ListTopNav = ({navigation}) => {
  const UserIcon = style => <Icon {...style} name="person-outline" />;
  const iconRef = React.createRef();

  const ForwardIcon = style => (
    <Icon
      ref={iconRef}
      fill="#3366FF"
      {...style}
      name={'arrow-forward-outline'}
    />
  );

  const UserAction = () => <TopNavigationAction icon={UserIcon} />;

  const FindTicket = () => (
    <Layout
      style={{flexDirection: 'row'}}
      onTouchStart={() => {
        navigation.navigate('FindTicket');
        iconRef.current.startAnimation();
      }}>
      <Layout>
        <Text status="primary">Cari Ticket</Text>
      </Layout>
      <Layout>
        <TopNavigationAction icon={ForwardIcon} />
      </Layout>
    </Layout>
  );

  return (
    <TopNavigation leftControl={UserAction()} rightControls={FindTicket()} />
  );
};

export const TicketTopNav = () => {
  const UserIcon = style => <Icon {...style} name="person-outline" />;

  const UserAction = () => <TopNavigationAction icon={UserIcon} />;

  return <TopNavigation leftControl={UserAction()} />;
};
