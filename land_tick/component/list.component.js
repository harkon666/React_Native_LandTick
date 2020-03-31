import React from 'react';
import {Text} from 'react-native';
import {Icon, List, ListItem} from '@ui-kitten/components';
import {ListTopNav} from './topNav.component';

const data = [
  {
    title: 'Jakarta - Bandung',
    description: '15:00 - 18:00',
    accessory: style => <Text>Rp. 150.000</Text>,
  },
  {
    title: 'Bandung - Surabaya',
    description: '15:00 - 21:00',
    accessory: style => <Text>Rp. 175.000</Text>,
  },
  {
    title: 'Jakarta - Surabaya',
    description: '12:00 - 18:00',
    accessory: style => <Text>Rp. 225.000</Text>,
  },
  {
    title: 'Jogja - Surabaya',
    description: '15:00 - 18:00',
    accessory: style => <Text>Rp. 90.000</Text>,
  },
  {
    title: 'Jogja - Jakarta',
    description: '22:00 - 03:00',
    accessory: style => <Text>Rp. 200.000</Text>,
  },
];

export const TicketList = ({navigation}) => {
  const renderItemIcon = style => (
    <Icon {...style} name="navigation-2-outline" />
  );

  const renderItem = ({item, index}) => (
    <ListItem
      key={index}
      title={item.title}
      description={item.description}
      icon={renderItemIcon}
      accessory={item.accessory}
    />
  );

  return (
    <React.Fragment>
      <ListTopNav navigation={navigation} />
      <List data={data} renderItem={renderItem} />
    </React.Fragment>
  );
};
