import * as types from '../actions/types';

const INITIAL_STATE = {
  userData: {},
  error: undefined,
}

export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case types.PROFILE_FOUND:
      return{
        ...state,
        userData:action.userData,
        error:undefined
      }
      break;
    case types.PROFILE_NOT_FOUND:
      return{
        ...state,
        error:action.error
      }
      break;
    default:
      return state
  }
}
