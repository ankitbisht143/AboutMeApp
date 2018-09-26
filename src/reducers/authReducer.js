import * as types from '../actions/types';

const INITIAL_STATE={
  isLoggedIn:false,
  isLoading:false,
  userData:{},
  error:undefined
}

export default function auth(state=INITIAL_STATE,action){
  switch (action.type){
    case types.IS_LOADING:
      return{
        ...state,
        isLoading:true
      }
      break;
    case types.LOGIN_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isLoggedIn:true,
        userData:action.userData,
        error:undefined
      }
      break;
    case types.LOGIN_FAILED:
      return{
        ...state,
        isLoading:false,
        isLoggedIn:false,
        error:action.error
      }
      break;
    case types.STOP_LOADING:
      return{
        ...state,
        isLoading:false
      }
      break;
    default:
      return state;
  }
}
