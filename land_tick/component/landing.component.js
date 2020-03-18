import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '@ui-kitten/components';

export const Landing = ({navigation}) => {
  return (
    <React.Fragment>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 36, marginBottom: 15}}>
          LandTick
        </Text>
        <Image
          style={{alignSelf: 'center', width: 300, height: 300}}
          source={require('../images/thomas.jpg')}
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <Button
            onPress={() => navigation.navigate('Login')}
            style={{marginRight: 15, width: 100}}>
            Register
          </Button>
          <Button
            onPress={() => navigation.navigate('Login')}
            style={{width: 100}}>
            Login
          </Button>
        </View>
      </View>
    </React.Fragment>
  );
};
