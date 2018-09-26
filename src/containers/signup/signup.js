import React from 'react';
import {View} from 'react-native';
import { Container, Content, Form, Text} from 'native-base';
import MultipleTags from 'react-native-multiple-tags';

import TextField from '../../components/textField';
import NativeButton from '../../components/button';
import {styles} from '../../styles/styles';

const Signup = props => {
  const {button, buttonTextStyle, form, multiTags} = styles;
  return(
    <Container>
      <Content>
        <Form style={[form,{marginTop:0}]}>
          <TextField autoCapitalize='none' placeholder="Username" icon="user"/>
          <TextField autoCapitalize='none' keyboardType="email-address" placeholder="Email address" icon="envelope"/>
          <TextField placeholder="Company Name" icon="building"/>
          <TextField secureTextEntry={true} placeholder="Password" icon="key"/>
          <TextField secureTextEntry={true} placeholder="Confirm Password" icon="key"/>
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
