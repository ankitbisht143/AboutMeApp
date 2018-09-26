import React, {PureComponent} from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import Login from './login';
import * as actions from '../../actions/auth/authActions';
import {USER_ID, ACCESS_TOKEN} from '../../constants/asyncStorageKeys';

class LoginContainer extends PureComponent{
  constructor(props){
    super(props);

    this.state={
      email:'',
      password:'',
      loading:false
    }
  }

  componentWillMount(){
    AsyncStorage.getItem(USER_ID).then((value) => {
      if(value){
        this.props.navigation.navigate('profile')
      }
    })
  }

  onPressSignup = () => {
    this.props.navigation.navigate('signup');
  }

  onChangeText = (value,input) => {
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
    this.setState({
      loading:true
    })
    this.props.login(this.state.email,this.state.password).then(() => {
      if(this.props.isLoggedIn){
        this.setState({
          loading:false
        }, () => {
          AsyncStorage.setItem(USER_ID,this.props.userData.user.id)
          AsyncStorage.setItem(ACCESS_TOKEN,this.props.userData.token.accessToken)
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
      <Login onPressSignup={this.onPressSignup} onChangeText={(value,input) => this.onChangeText(value,input)}
        onPressLogin={this.onPressLogin} loading={this.state.loading}/>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.login({email,password}))
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
