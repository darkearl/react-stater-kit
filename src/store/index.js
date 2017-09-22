import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import makeRootReducer from './reducer'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createHistory, useBasename } from "history";
import Config from '../config';
// create basename
const browserHistory = useBasename(createHistory)({
    basename: Config.publicPath
});

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