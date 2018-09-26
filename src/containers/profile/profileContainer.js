import React,{Component} from 'react'
import {Alert, AsyncStorage} from 'react-native'
import {connect} from 'react-redux';

import Profile from './profile';
import {expertise} from '../../data/expertise';
import {USER_ID, ACCESS_TOKEN} from '../../constants/asyncStorageKeys';
import * as actions from '../../actions/user/userActions';

class ProfileContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      userId:'',
      fullName:'',
      companyName:'',
      expertise:[],
      loading:true
    }
  }

  componentWillMount(){
    AsyncStorage.getItem(USER_ID).then((userId) => {
      if(userId){
        this.setState({
          userId:userId
        }, () => {
          AsyncStorage.getItem(ACCESS_TOKEN).then((accessToken) => {
            this.props.userProfile(this.state.userId,accessToken).then(() => {
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
                  fullName:this.props.userData.username,
                  companyName:this.props.userData.companyName,
                  expertise:this.props.userData.expertise,
                  loading:false
                })
              }
            })
          })
        })
      }
    })
  }

  onPressLogout = () => {
    Alert.alert(
      'Logout Profile',
      'Are you sure?',
      [
        {text:'Yes', onPress:() => {
          AsyncStorage.clear().then(() => {
            this.props.navigation.navigate('login')
          })
        }},
        {text:'No'}
      ]
    )
  }
  render(){
    return(
      <Profile fullName={this.state.fullName} companyName={this.state.companyName} expertise={this.state.expertise}
        onPressLogout={this.onPressLogout} loading={this.state.loading}/>
    )
  }
}

const mapStateToProps = state => ({
  userData:state.user.userData,
  error:state.user.error
})

const mapDispatchToProps = dispatch => ({
  userProfile:(userId,token) => dispatch(actions.userProfile({userId,token}))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
