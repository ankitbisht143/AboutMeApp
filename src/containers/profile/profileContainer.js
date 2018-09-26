import React,{Component} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux';

import Profile from './profile';
import {expertise} from '../../data/expertise';

export default class SignupContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      fullName:'',
      companyName:'',
      expertise:['React Native','React JS','Swift','Nginx','Python','Node JS']
    }
  }

  componentDidMount(){
    this.setState({
      fullName:this.props.navigation.getParam('fullName'),
      companyName:this.props.navigation.getParam('fullName')
    })
  }

  onPressLogout = () => {
    Alert.alert(
      'Logout Profile',
      'Are you sure?',
      [
        {text:'Yes', onPress:() => {
          this.props.navigation.navigate('login')
        }},
        {text:'No'}
      ]
    )
  }
  render(){
    return(
      <Profile fullName={this.state.fullName} companyName={this.state.companyName} expertise={this.state.expertise}
        onPressLogout={this.onPressLogout}/>
    )
  }
}
