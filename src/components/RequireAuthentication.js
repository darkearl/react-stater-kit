import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setRedirectUrl } from '../routes/Login/modules/login';

class RequireAuthentication extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  }

	componentDidMount() {
		const { dispatch, currentURL, isLoggedIn, router } = this.props

    if (!isLoggedIn) {
      dispatch(setRedirectUrl(currentURL))
      router.replace('/login')
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

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.user.isAuthenticated,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(RequireAuthentication)