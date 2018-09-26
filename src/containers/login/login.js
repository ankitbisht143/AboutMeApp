import React from 'react';

import { Container, Content, Form, Text} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

import TextField from '../../components/textField';
import NativeButton from '../../components/button';
import {styles} from '../../styles/styles';

const Login = props => {
  const {centerAlignText, centerAlignBoldText, button, buttonTextStyle, transButton, transButtonTxtStyle, form, loading} = styles;
  return(
    <Container>
      <Spinner visible={props.loading} textStyle={loading}/>
      <Content padder>
        <Text style={centerAlignBoldText}>Sign in to get started</Text>
        <Form style={form}>
          <TextField autoCapitalize='none' keyboardType='email-address' placeholder="Email address" icon="envelope"
            onChangeText={(email) => props.onChangeText(email,'email')}/>
          <TextField secureTextEntry={true} placeholder="Password" icon="key"
            onChangeText={(password) => props.onChangeText(password,'password')}/>
        </Form>
        <NativeButton title="LOGIN" style={button} buttonTextStyle={buttonTextStyle} onPress={props.onPressLogin}/>
        <Text style={centerAlignText}>{`Don't have an account?`}</Text>
        <NativeButton title="SIGNUP" style={transButton} buttonTextStyle={transButtonTxtStyle} onPress={props.onPressSignup}/>
      </Content>
    </Container>
  )
}

export default Login;
