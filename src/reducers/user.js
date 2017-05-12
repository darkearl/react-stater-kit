import {createReducer} from '../utils/reducer';

import {
  GET_PROFILE_USER
} from './../constants/ActionTypes';


const initialState = {
  isFetching: false,
  isAuthenticated :false
};

export default createReducer(initialState, {
  [GET_PROFILE_USER]: (state,payload) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      ...payload
    });
  }
})