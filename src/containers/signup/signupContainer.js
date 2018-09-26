import React,{Component} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux';

import Signup from './signup';
import {expertise} from '../../data/expertise';

export default class SignupContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      expertiseTags:expertise,
      expertise:[]
    }
  }

  onChangeExpertise(expertise){
    this.setState({
      expertise:expertise
    })
  }

  onPressSignup = () => {
  }

  render(){
    return(
      <Signup expertiseTags={this.state.expertiseTags} expertise={this.state.expertise}
        onChangeExpertise={(expertise) => this.onChangeExpertise(expertise)} onPressSignup={this.onPressSignup}/>
    )
  }
}
