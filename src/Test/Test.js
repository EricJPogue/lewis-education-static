import React from 'react'

// Test links are available at:
//     http://localhost:3000/#/test/me
//     http://www.lewis.education/#/test/me


export class Test extends React.Component {
	render() {
		return ( <div>
			<h4>Test Page</h4>

			<br />
			The "Parameter ID" below should be "me" or the test page was not called correct. 
			<p>Parameter ID: {this.props.match.params.id}</p>
		</div>	)
	}
}


