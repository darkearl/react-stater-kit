import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

	componentDidMount() {
		
	}
	render() {
		return (
			<div>Login page. RedirectUrl: {this.props.redirectUrl}</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
  return {
    redirectUrl: ownProps.location.query.redirectUrl || state.login.redirectUrl
  }
}

export default connect(mapStateToProps)(Login)