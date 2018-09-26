import React,{PureComponent} from 'react';
import {Alert, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import Login from './login';
import * as actions from '../../actions/authActions';
import {IS_LOGGED_IN} from '../../constants/asyncStorageKeys';

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
    AsyncStorage.getItem(IS_LOGGED_IN).then((value) => {
      if(value){
        this.props.navigation.navigate('profile')
      }
    })
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
    this.setState({
      loading:true
    })
    this.props.login(this.state.email,this.state.password).then(() => {
      if(this.props.error){
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
      else{
        this.setState({
          loading:false
        }, () => {
          AsyncStorage.setItem(IS_LOGGED_IN,"1")
          this.props.navigation.navigate('profile')
        })
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
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.login({email,password})),
  stopLoading:() => dispatch(actions.stopLoading())
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
