import React, { Component } from 'react';

class TestPage extends Component {
	render() {
		return (
			<div>page TestPage</div>
		);
	}
}

// Sync route definition
export default {
	path:'test',
  component : TestPage
}