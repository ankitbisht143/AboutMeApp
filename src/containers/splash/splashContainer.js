import React,{Component} from 'react'
import {AsyncStorage} from 'react-native'

import Splash from './splash';
import {USER_ID, ACCESS_TOKEN} from '../../constants/asyncStorageKeys';

export default class SplashContainer extends Component{

  componentWillMount(){
    AsyncStorage.getItem(USER_ID).then((value) => {

      if(value){
        this.props.navigation.navigate('profile')
      }
      else{
        this.props.navigation.navigate('login')
      }
    })
  }

  render(){
    return(
      <Splash/>
    )
  }
}
