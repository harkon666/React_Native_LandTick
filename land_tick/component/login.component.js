import React from 'react';
import {View, Text} from 'react-native';
import {
  Input,
  Button,
  Icon,
  CheckBox,
  TopNavigationAction,
  TopNavigation,
} from '@ui-kitten/components';

export const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const BackIcon = style => <Icon {...style} name="arrow-back" />;

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <React.Fragment>
      <TopNavigation leftControl={BackAction()} />
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
        <Button status="primary" onPress={() => navigation.navigate('Home')}>
          LOGIN
        </Button>
      </View>
    </React.Fragment>
  );
};
