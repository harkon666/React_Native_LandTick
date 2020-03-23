import React from 'react';
import {Text} from 'react-native';
import {Icon, List, ListItem} from '@ui-kitten/components';
import {ListTopNav, TicketTopNav} from './topNav.component';

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const TicketList = ({navigation}) => {
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

  return (
    <React.Fragment>
      <ListTopNav navigation={navigation} />
      <List data={data} renderItem={renderItem} />
    </React.Fragment>
  );
};
