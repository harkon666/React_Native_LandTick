import React from 'react';
import {View, Text} from 'react-native';
import {Input, Button, CheckBox} from '@ui-kitten/components';

export const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          width: '85%',
          justifyContent: 'center',
          marginLeft: 30,
        }}>
        <Text style={{marginBottom: 60, alignSelf: 'center', fontSize: 30}}>
          Login LandTick
        </Text>
        <Text style={{marginBottom: 8}}>Email</Text>
        <Input
          placeholder="Place your Email"
          value={email}
          onChangeText={setEmail}
          style={{marginBottom: 15}}
        />
        <Text style={{marginBottom: 8}}>Password</Text>
        <Input
          placeholder="Place your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{marginBottom: 15}}
        />
        <CheckBox
          text="Remember me"
          checked={checked}
          onChange={isChecked => setChecked(isChecked)}
          style={{marginBottom: 15}}
        />
        <Button status="primary">LOGIN</Button>
      </View>
    </React.Fragment>
  );
};
