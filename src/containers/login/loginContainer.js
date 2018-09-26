import React,{PureComponent} from 'react'
import {Alert} from 'react-native'
import {connect} from 'react-redux';

import Login from './login';
import * as actions from '../../actions/authActions'

class LoginContainer extends PureComponent{
  constructor(props){
    super(props);

    this.state={
      email:'ankit2.bisht@gmail.com',
      password:'pass1234'
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.error){
    }
    if(nextProps.isLoggedIn){
      this.props.navigation.navigate('profile',{
        fullName:nextProps.userData.user.firstName+' '+nextProps.userData.user.lastName
      })
    }

  }

  onPressSignup = () => {
    this.props.navigation.navigate('signup');
  }

  onChangeText(value,input){
    switch (input) {
      case "email":
        this.setState({
          email:value
        })
        break;
      default:
      this.setState({
        password:value
      })
    }
  }

  onPressLogin = () => {
    this.props.login(this.state.email,this.state.password)
  }
  render(){
    return(
      <Login onPressSignup={this.onPressSignup} onChangeText={(value,input) => this.onChangeText(value,input)}
        onPressLogin={this.onPressLogin}/>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.login({email,password}))
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
