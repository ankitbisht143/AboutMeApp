import {StackNavigator, createStackNavigator} from 'react-navigation';
import * as navigationOptions from './navigationOptions'

import LoginScene from '../scenes/loginScene';
import SignupScene from '../scenes/signupScene';
import ProfileScene from '../scenes/profileScene';

const MainNavigator = createStackNavigator({
  login:{screen:LoginScene,navigationOptions:{header:null,geasturesEnaled:false}},
  signup:{screen:SignupScene,navigationOptions:navigationOptions.signup},
  profile:{screen:ProfileScene,navigationOptions:navigationOptions.profile}
},{
  navigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
        backgroundColor:'white'
    },
  	headerTintColor:'black'
  }
})

export default MainNavigator;
