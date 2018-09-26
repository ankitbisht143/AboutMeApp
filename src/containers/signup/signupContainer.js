import React,{Component} from 'react'
import {Alert, AsyncStorage} from 'react-native'
import {connect} from 'react-redux';

import Signup from './signup';
import {expertise} from '../../data/expertise';
import * as utils from '../../utils/utils';
import * as actions from '../../actions/authActions';
import {IS_LOGGED_IN} from '../../constants/asyncStorageKeys';

class SignupContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      expertiseTags:expertise,
      expertise:[],
      username:'',
      email:'',
      companyName:'',
      password:'',
      confirmPassword:'',
      loading:false
    }
  }

  onChangeExpertise(expertise){
    this.setState({
      expertise:expertise
    })
  }

  onChangeText = (value,input) => {
    switch (input) {
      case "username":
        this.setState({
          username:value
        })
        break;
      case "email":
        this.setState({
          email:value
        })
        break;
      case "companyName":
        this.setState({
          companyName:value
        })
        break;
      case "password":
        this.setState({
          password:value
        })
        break;
      default:
        this.setState({
          confirmPassword:value
        })
    }
  }

  onPressSignup = () => {
    if(!this.state.username || !this.state.email || !this.state.companyName || !this.state.password ||
      this.state.expertise.length < 1){
        alert('All fields are mandatory')
        return;
      }
    if(!utils.validateEmail(this.state.email)){
      alert('Your email is not valid')
      return
    }
    if(this.state.password.length < 6){
      alert('Password length must be at least 6 characters long')
      return
    }
    if(!utils.passwordMatchHelper(this.state.password,this.state.confirmPassword)){
      alert('Your passwords did not matched')
      return
    }
    this.setState({
      loading:true
    })
    this.props.signup(this.state.username,this.state.email,this.state.expertise,this.state.companyName,this.state.password)
    .then(() => {
      if(this.props.isLoggedIn){
        this.setState({
          loading:false
        }, () => {
          AsyncStorage.setItem(IS_LOGGED_IN,"1")
          this.props.navigation.navigate('profile')
        })
      }
      else{
        Alert.alert(
          '',
          this.props.error,
          [{
            text:'OK',onPress:() => {
              this.setState({
                loading:false
              })
            }
          }]
        )
      }
    })
  }

  render(){
    return(
      <Signup expertiseTags={this.state.expertiseTags} expertise={this.state.expertise} onPressSignup={this.onPressSignup}
        onChangeExpertise={(expertise) => this.onChangeExpertise(expertise)} loading={this.state.loading}
          onChangeText={(value,input) => this.onChangeText(value,input)}/>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  signup:(username,email,expertise,companyName,password) => dispatch(actions.signup({username,email,expertise,companyName,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer)
