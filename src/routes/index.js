import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import RequireAuthentication from '../components/RequireAuthentication'
import TestPage from './TestPage';
import CoreLayout from '../layouts/pagelayouts';

import { injectReducer } from '../store/reducer'

import reducerLogin from './Login/modules/login'

const requireAuthRoutes = (store) => ({
  component   : RequireAuthentication,
  childRoutes : [
    TestPage
  ]
})

export const createRoutes = (store) =>{ 
  //init reducer
  injectReducer(store, { key: 'login', reducer: reducerLogin });

  return {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home,
    childRoutes : [
      Login(store),
      requireAuthRoutes(store),
      // requireNotAuth(store)
      NotFound
    ]
  }
}

export default createRoutes
