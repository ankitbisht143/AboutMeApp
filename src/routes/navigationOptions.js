import * as font from '../constants/fontFamily'
import {SCREEN_WIDTH} from '../constants/dimensions'

const signup={
	title: 'SIGN UP',
	headerTitleStyle:{fontSize:16, fontFamily:font.RALEWAY_BOLD, width:SCREEN_WIDTH}
}

const profile={
	title:'PROFILE',
	headerLeft: null,
	headerTitleStyle: {justifyContent:'center', alignSelf:'center', textAlign: 'center', marginLeft:0, fontSize:16,
		fontFamily:font.RALEWAY_BOLD, width:SCREEN_WIDTH}
}

export {
	signup,
	profile
}
