import {
	SET_REDIRECT_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  GET_PROFILE_USER
} from '../constants/ActionTypes';

export function setRedirectUrl(url) {
	return {
		type: SET_REDIRECT_URL,
		payload: {
			redirectUrl: url
		}
	}
}