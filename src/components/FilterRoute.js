import { Component } from 'react';
import PropTypes from 'prop-types';

export default function createComponent(store, privateRoute=true){

    const isLoggedIn = store.getState().user.isAuthenticated;
    const requireByPass = privateRoute ? privateRoute && isLoggedIn : !isLoggedIn;

    class FilterComponent extends Component {
        static propTypes = {
            router: PropTypes.object.isRequired
        }
        constructor(props){
            super(props);
            this.state = {
                currentURL : props.location.pathname
            }
        }
        componentDidMount() {
            const { router } = this.props

            if(!requireByPass){
                if(privateRoute){
                    router.replace({
                        pathname: '/login',
                        state: { nextPathname: this.state.currentURL }
                    })
                }else{
                    router.replace({
                        pathname: '/logout',
                        state: { nextPathname: this.state.currentURL }
                    })
                }
            }
        }
        render() {
            if (requireByPass) {
                return this.props.children
            } else {
                return null
            }
        }
    }

    return FilterComponent;
}