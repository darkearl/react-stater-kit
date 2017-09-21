import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import TestPage from './TestPage';
import Counter from './Counter';
import CoreLayout from '../layouts/pagelayouts';

import FilterRoute from '../components/FilterRoute';

// import { injectReducer } from '../store/reducer'

// import reducerLogin from './Login/modules/login'
const privateRoutes = (store) => ({
  component   : FilterRoute(store),
  childRoutes : [
    TestPage
  ]
})

const publicRoutes = (store) => ({
  component   : FilterRoute(store,false),
  childRoutes : [
    Login(store),
    //register
  ]
})
export const createRoutes = (store) =>{ 
  //init reducer
  // injectReducer(store, { key: 'login', reducer: reducerLogin });

  return {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home,
    childRoutes : [
      // About,
      // privacy,
      // contact
      Counter(store),
      privateRoutes(store),
      publicRoutes(store),
      // Wildcard routes, e.g. { path: '*', ... } (must go last)
      NotFound
    ]
  }
}

export default createRoutes
