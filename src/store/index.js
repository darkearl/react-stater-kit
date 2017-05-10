import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import reducers from "../reducers";
import thunkMiddleware from 'redux-thunk';


// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add thunk middleware
middlewares.push(thunkMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
// create history
const history = syncHistoryWithStore(browserHistory, store);


// export
export { store, history };