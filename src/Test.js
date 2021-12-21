import React from 'react'
import Table from 'react-bootstrap/Table'

import { getAllClasses } from './data/ClientDataAPIs'

// Test links are available at:
//     http://localhost:3000/#/test/me
//     http://www.lewis.education/#/test/me


const renderTableBody = () => {
	let currentClasses = getAllClasses()
	return currentClasses.map((currentClass, index) => {
		const { classID, title, schedule, time } = currentClass
		return (
			<tr key={classID}>
				<td><a href= {`https://www.lewis.education/?cpsc=${classID}#/sprint/1`}>{title} ({classID})</a> </td>
				<td><a href= {`http://localhost:3000/?cpsc=${classID}#/sprint/1`}>[Test]</a> <a href= {`https://www.lewis.education/?cpsc=${classID}#/sprint/1`}>[Production]</a></td>
				<td>{schedule}</td>
				<td>{time}</td>
			</tr>
			
		)
	})
}

export class Test extends React.Component {
	render() {
		return ( <div>

<h4>Test Page</h4>
<h5>Test and production links for all classes are provided below:</h5><br />

<Table striped bordered hover>
	<thead>
		<tr>
			<th style={{textAlign:'center'}}>Class</th>
			<th style={{textAlign:'center'}}>Links</th>
			<th style={{textAlign:'center'}}>Schedule</th>
			<th style={{textAlign:'center'}}>Time</th>
			
		</tr>
	</thead>
	<tbody>
		{renderTableBody()}
	</tbody>
</Table>

<br />
The "Parameter ID" below should be "me" or the test page was not called correct. 
<p>Parameter ID: {this.props.match.params.id}</p>

		</div>	)
	}
}


