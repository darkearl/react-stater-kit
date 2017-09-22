import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { history,store } from "./store";
console.log(process.env);
const routes = require('./routes/index').default(store)

ReactDOM.render(
  <App store={store} routes={routes} history={history}/>,
  document.getElementById('root')
);
