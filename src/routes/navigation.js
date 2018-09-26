import {StackNavigator, createStackNavigator} from 'react-navigation';
import * as navigationOptions from './navigationOptions'
import * as font from '../constants/fontFamily'
import {SCREEN_WIDTH} from '../constants/dimensions'

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
  	headerTintColor:'black',
  	headerTitleStyle:{ fontSize:16, fontFamily:font.RALEWAY_BOLD, width:SCREEN_WIDTH}
  }
})

export default MainNavigator;
