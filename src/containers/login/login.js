import React from 'react';

import { Container, Content, Form, Text} from 'native-base';

import TextField from '../../components/textField';
import NativeButton from '../../components/button';
import {styles} from '../../styles/styles';

const Login = props => {
  const {centerAlignText, centerAlignBoldText, button, buttonTextStyle, transButton, transButtonTxtStyle, form} = styles;
  return(
    <Container>
      <Content padder>
        <Text style={centerAlignBoldText}>Sign in to get started</Text>
        <Form style={form}>
          <TextField autoCapitalize='none' keyboardType='email-address' placeholder="Email address" icon="ios-person"/>
          <TextField secureTextEntry={true} placeholder="Password" icon="ios-unlock"/>
        </Form>
        <NativeButton title="LOGIN" style={button} buttonTextStyle={buttonTextStyle}/>
        <Text style={centerAlignText}>{`Don't have an account?`}</Text>
        <NativeButton title="SIGNUP" style={transButton} buttonTextStyle={transButtonTxtStyle}/>
      </Content>
    </Container>
  )
}

export default Login;
