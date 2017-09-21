import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
	render() {
		return (
			<div>
				page Login<br />nextPathname: {this.props.nextPathname}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		nextPathname: state.routing.locationBeforeTransitions.state.nextPathname
	}
}

export default connect(mapStateToProps)(Login)
