import * as types from './types';
import {BASE_URL} from '../api/url';

export function isLoading(bool){
  return{
    type:types.IS_LOADING,
    isLoading:bool
  }
}

export function loginSuccess(userData){
  return{
    type:types.LOGIN_SUCCESS,
    userData
  }
}

export function loginFailed(error){
  return{
    type:types.LOGIN_FAILED,
    error
  }
}

export function login(userData){
  return {
    type:types.LOGIN_ATTEMPT,
    userData
  }
}
