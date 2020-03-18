import React from 'react';
import {View, Text} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  Icon,
  List,
  ListItem,
} from '@ui-kitten/components';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const TicketList = () => {
  const renderItemAccessory = style => <Text>Rp. 320.000</Text>;

  const renderItemIcon = style => (
    <Icon {...style} name="navigation-2-outline" />
  );

  const renderItem = ({item, index}) => (
    <ListItem
      key={index}
      title={`Jakarta  - Bandung`}
      description={`15:00 - 18:00`}
      icon={renderItemIcon}
      accessory={renderItemAccessory}
    />
  );

  return <List data={data} renderItem={renderItem} />;
};
