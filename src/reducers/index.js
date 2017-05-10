import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from "react-router-redux";

// main reducers
const rootReducer = combineReducers({
	routing: routerReducer,
  form: formReducer
  // your reducer here
});

export default rootReducer;

