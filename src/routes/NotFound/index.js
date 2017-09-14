import React, { Component } from 'react';

class NotFound extends Component {
	render() {
		return (
			<div>page NotFound</div>
		);
	}
}

// Sync route definition
export default {
  path: "*",
  component : NotFound
}