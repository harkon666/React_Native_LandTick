import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {Layout, Text, Card, Button, Icon} from '@ui-kitten/components';

const data = new Array(2).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const MyTicket = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center'}}>
      <Card style={{marginHorizontal: 15}}>
        <Layout
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            paddingBottom: 10,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}>
          <Layout>
            <Text
              status="primary"
              style={{
                paddingTop: 10,
                fontSize: 24,
                fontWeight: 'bold',
                marginHorizontal: 5,
              }}>
              My Ticket
            </Text>
            <Text status="warning" style={{marginHorizontal: 5}}>
              Pending
            </Text>
          </Layout>

          <Layout
            style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 24, paddingTop: 10, fontWeight: '900'}}>
              Kereta Api
            </Text>
            <Text style={{fontSize: 12}}>Saturday, 21 Maret 2020</Text>
          </Layout>
        </Layout>
        <Layout style={{flexDirection: 'row'}}>
          <Layout style={{flex: 1, marginLeft: 5}}>
            <Text style={{fontWeight: '700'}}>15:00 - 18:00</Text>
          </Layout>
          <Layout>
            <Text
              style={{
                marginHorizontal: 5,
                fontWeight: '700',
              }}>
              Jakarta (GMR)
            </Text>
            <Text style={{marginHorizontal: 5, fontWeight: '700'}}>
              Bandung (BDG)
            </Text>
          </Layout>
        </Layout>
        <Layout style={{flexDirection: 'row'}}>
          <Layout
            style={{
              marginVertical: 10,
              flex: 1,
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              borderTopColor: '#000000',
              borderTopWidth: 1,
            }}>
            <Button style={{marginVertical: 10}} size="small">
              Bayar Sekarang
            </Button>
          </Layout>
        </Layout>
      </Card>
    </Layout>
  );
};
