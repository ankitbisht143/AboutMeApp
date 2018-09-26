import {StackNavigator} from 'react-navigation';

import LoginScene from '../scenes/loginScene';

const MainNavigator = StackNavigator({
  login:{screen:LoginScene,navigationOptions:{header:null,geasturesEnaled:false}}
})

export default MainNavigator;
