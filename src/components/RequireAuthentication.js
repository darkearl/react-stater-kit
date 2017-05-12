import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRedirectUrl } from '../actions/login'

class RequireAuthentication extends Component {

	componentDidMount() {
		const { dispatch, currentURL, isLoggedIn } = this.props

    if (!isLoggedIn) {
      dispatch(setRedirectUrl(currentURL))
      this.context.router.replace('/login')
    }
	}
	render() {
    const { isLoggedIn } = this.props

		if (isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
	}
}

RequireAuthentication.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.user.isAuthenticated,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(RequireAuthentication)