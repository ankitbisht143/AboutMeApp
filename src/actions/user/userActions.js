import * as types from '../types';
import {BASE_URL} from '../../constants/url';

export function profileFound(userData){
  return {
    type:types.PROFILE_FOUND,
    userData
  }
}

export function profileNotFound(error){
  return {
    type:types.PROFILE_NOT_FOUND,
    error
  }
}

export function userProfile(userData){
  return dispatch => {
    return fetch(`${BASE_URL}/users/${userData.userId}`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userData.token}`
      }
    })
      .then((response) => {
        if(response.status < 300){
          response.json().then((responseJSON) => {
            dispatch(profileFound(responseJSON))
          })
        }
        else{
          response.json().then((responseJSON) => {
            dispatch(profileNotFound(responseJSON.message))
          })
        }
      })
      .catch((error) => {
        dispatch(profileNotFound(error))
      })
  }
}
