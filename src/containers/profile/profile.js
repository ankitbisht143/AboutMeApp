import React from 'react';
import {View, Image} from 'react-native';
import { Container, Content, Form, Text, Header} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

import {styles} from '../../styles/styles';
import {PROFILE} from '../../constants/images';
import NativeButton from '../../components/button';
import {capitalizeFirstLetter} from '../../utils/utils';

const Profile = props => {
  const {profile, profileContainer, centerAlignText, button, buttonTextStyle, leftAlignText, loading} = styles;
  return(
    <Container>
      <Spinner visible={props.loading} textStyle={loading}/>
      <Content>
        <Content style={profileContainer}>
          <Image source={PROFILE} style={profile}/>
          <Text style={[centerAlignText,{fontSize:20}]}>{capitalizeFirstLetter(props.fullName)}</Text>
          <Text style={[centerAlignText,{marginTop:5,color:'gray'}]}>Employee at {props.companyName}</Text>

        </Content>
        <Text style={leftAlignText}>My expertise</Text>
        <Text style={[leftAlignText,{marginTop:5,color:'gray',fontSize:14}]}>{capitalizeFirstLetter(props.expertise.join(' | '))}</Text>

      </Content>
      <View style={{paddingBottom:20}}>
        <NativeButton title="LOGOUT" style={button} buttonTextStyle={buttonTextStyle} onPress={props.onPressLogout}/>
      </View>
    </Container>
  )
}

export default Profile;
