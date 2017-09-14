// import { injectReducer } from '../../store/reducer'
import Login from './components/Login'
// import reducerLogin from './modules/login'

export default (store) => {
	return {
		path : 'login',
		/*  Async getComponent is only invoked when route matches   */
		getComponent (nextState, cb) {
			/*  Webpack - use 'require.ensure' to create a split point
					and embed an async module loader (jsonp) when bundling   */
			require.ensure([], (require) => {

				
				/*  Add the reducer to the store */
				// injectReducer(store, { key: 'login', reducer: reducerLogin })

				/*  Return getComponent   */
				cb(null, Login)

			/* Webpack named bundle   */
			}, 'login')
		}
	}
}
