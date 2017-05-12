import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from "react-router-redux";
import loginReducer from './login';
import userReducer from './user';

// main reducers
const rootReducer = combineReducers({
	routing: routerReducer,
  form: formReducer,
  // your reducer here
  login: loginReducer,
  user: userReducer
});

export default rootReducer;

