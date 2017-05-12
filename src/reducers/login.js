import {createReducer} from '../utils/reducer';
import {
  SET_REDIRECT_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  GET_PROFILE_USER
} from './../constants/ActionTypes';


const initialState = {
  isFetching: false,
  error: null,
  redirectUrl: '/'
}

export default createReducer(initialState, {
  [LOGIN_REQUEST]: (state) => {
    return Object.assign({}, state, {
      isFetching: true,
      error: null
    });
  },
  [LOGIN_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      ...initialState
    });
  },
  [LOGIN_FAILURE]: (state,payload) => {
    return Object.assign({}, state, {
      isFetching: false,
      error: payload.message
    });
  },
  [LOGOUT_USER]: (state) => {
    return Object.assign({}, state, {
      ...initialState
    });
  },
  [GET_PROFILE_USER]: (state) => {
    return Object.assign({}, state, {
      ...initialState
    });
  },
  [SET_REDIRECT_URL]: (state,payload) => {
    return Object.assign({}, state, {
      ...payload
    });
  },
})