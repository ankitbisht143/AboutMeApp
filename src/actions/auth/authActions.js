import * as types from '../types';
import {BASE_URL} from '../../constants/url';

export function authSuccess(userData){
  return{
    type:types.AUTH_SUCCESS,
    userData
  }
}

export function authFailed(error){
  return{
    type:types.AUTH_FAILED,
    error
  }
}

export function login(userData){
  return dispatch => {
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
        response.json().then((responseJSON) => {
          dispatch(authSuccess(responseJSON))
        })
      }
      else{
        response.json().then((responseJSON) => {
          dispatch(authFailed('Incorrect email or password'))
        })
      }
    })
    .catch((error) => {
      dispatch(authFailed(error))
    })
  }
}

export function signup(userData){
  return dispatch => {
    return fetch(`${BASE_URL}/auth/register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":userData.email,
	      "password":userData.password,
        "username":userData.username,
	      "companyName":userData.companyName,
	      "expertise":userData.expertise
      })
    })
    .then((response) => {
      if(response.status < 300){
        response.json().then((responseJSON) => {
          dispatch(authSuccess(responseJSON))
        })
      }
      else{
        response.json().then((responseJSON) => {
          dispatch(authFailed('Incorrect email or password'))
        })
      }
    })
    .catch((error) => {
      dispatch(authFailed(error))
    })
  }
}
