import React from 'react';
import {View} from 'react-native';
import { Container, Content, Form, Text} from 'native-base';
import MultipleTags from 'react-native-multiple-tags';
import Spinner from 'react-native-loading-spinner-overlay';

import TextField from '../../components/textField';
import NativeButton from '../../components/button';
import {styles} from '../../styles/styles';

const Signup = props => {
  const {button, buttonTextStyle, form, multiTags, loading} = styles;
  return(
    <Container>
      <Spinner visible={props.loading} textStyle={loading}/>
      <Content>
        <Form style={[form,{marginTop:0}]}>
          <TextField placeholder="Fullname" icon="user"
            onChangeText={(username) => props.onChangeText(username,'username')}/>
          <TextField autoCapitalize='none' keyboardType="email-address" placeholder="Email address" icon="envelope"
            onChangeText={(email) => props.onChangeText(email,'email')}/>
          <TextField placeholder="Company Name" icon="building"
            onChangeText={(companyName) => props.onChangeText(companyName,'companyName')}/>
          <TextField secureTextEntry={true} autoCapitalize='none' placeholder="Password" icon="key"
            onChangeText={(password) => props.onChangeText(password,'password')}/>
          <TextField secureTextEntry={true} autoCapitalize='none' placeholder="Confirm Password" icon="key"
            onChangeText={(confirmPassword) => props.onChangeText(confirmPassword,'confirmPassword')}/>
          <View style={multiTags}>
            <MultipleTags tags={props.expertiseTags} search onChangeItem={(expertise) => props.onChangeExpertise(expertise)}
              title="Expertise"/>
          </View>
        </Form>
      </Content>
      <View style={{paddingBottom:20}}>
        <NativeButton title="SIGN UP" style={button} buttonTextStyle={buttonTextStyle} onPress={props.onPressSignup}/>
      </View>
    </Container>
  )
}

export default Signup;
