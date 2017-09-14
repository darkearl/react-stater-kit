import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import makeRootReducer from './reducer'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add thunk middleware
middlewares.push(thunkMiddleware);

// add logger for redux
middlewares.push(logger);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createReduxStore(
  makeRootReducer(), 
  middleware
);

store.asyncReducers = {};
// create history
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };