import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props
    const statusAuthChanged = prevProps.isLoggedIn !== this.props.isLoggedIn

    if (statusAuthChanged) {
      this.context.router.push(redirectUrl)
    }

  }
  
	render() {
		return (
			<div className="container">
        {this.props.children}
      </div>
		);
	}
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isAuthenticated,
    redirectUrl: state.login.redirectUrl
  }
}

export default connect(mapStateToProps)(App)