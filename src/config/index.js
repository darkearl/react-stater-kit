import AppConfig from './AppConfig'
import DebugConfig from './DebugConfig'
let config = AppConfig;
if (process.env.NODE_ENV !== 'production'){
    //enable polyfill for dev environment
    //...
    config = Object.assign({},config,DebugConfig);
}

export default config;