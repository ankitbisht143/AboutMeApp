import * as types from './types';
import {BASE_URL} from '../constants/url';

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

export function stopLoading(){
  return{
    type:types.STOP_LOADING
  }
}

export function login(userData){
  return dispatch => {
    dispatch(isLoading(true));
    return fetch(`${BASE_URL}/auth/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":userData.email,
        "password":userData.password
      })
    })
    .then((response) => {
      if(response.status < 300){
        dispatch(isLoading(false));
        response.json().then((responseJSON) => {
          dispatch(loginSuccess(responseJSON))
        })
      }
      else{
        dispatch(isLoading(false));
        response.json().then((responseJSON) => {
          dispatch(loginFailed(responseJSON.message))
        })
      }
    })
    .catch((error) => {
      dispatch(isLoading(false))
      dispatch(loginFailed(error))
    })
  }
}
