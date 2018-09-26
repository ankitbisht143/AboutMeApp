import {StyleSheet, Platform} from 'react-native';
import {SCREEN_WIDTH,SCREEN_HEIGHT} from '../constants/dimensions';

import * as fontFamily from '../constants/fontFamily';
import * as color from '../constants/colors';

export const styles=StyleSheet.create({
  centerAlignBoldText:{
    alignSelf:'center',
    marginTop:SCREEN_HEIGHT/5,
    fontSize:22,
    fontFamily:fontFamily.ARGENTCF_REGULAR,
    color:'black'
  },
  button:{
    alignSelf:'center',
    marginTop:SCREEN_HEIGHT/16.6,
    width:150,
    justifyContent:'center'
  },
  buttonTextStyle:{
    fontFamily:fontFamily.ARGENTCF_BOLD,
    fontSize:16,
    color:'white'
  },
  centerAlignText:{
    alignSelf:'center',
    marginTop:SCREEN_HEIGHT/25,
    fontSize:16,
    fontFamily:fontFamily.ARGENTCF_REGULAR,
    color:'black'
  },
  transButton:{
    alignSelf:'center',
    width:150,
    justifyContent:'center',
    backgroundColor:'transparent',
  },
  transButtonTxtStyle:{
    color:'black',
    textDecorationLine:'underline',
    fontFamily:fontFamily.ARGENTCF_BOLD,
    fontSize:16
  },
  form:{
    marginTop:SCREEN_WIDTH/12.5
  }
})
