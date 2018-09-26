import React,{Component} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {connect} from 'react-redux';

import Login from './login';

export default class LoginContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      email:'test@woobly.com',
      password:'pass1234'
    }
  }

  render(){
    return(
      <Login/>
    )
  }
}
