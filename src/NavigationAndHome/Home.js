import React from 'react'
import Table from 'react-bootstrap/Table'

import { getClasses } from '../DataAndAPIs/Classes'
import { getCurrentSprintByClassID } from '../DataAndAPIs/ClientDataAPIs'

export class Home extends React.Component {
	// This method of rendering multiple row is described at the following link:
	//     https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

	renderTableBody = (currentClasses) => {
		return currentClasses.map((currentClass, index) => {
			const { classID, title, schedule, time } = currentClass
			return (
				<tr key={classID}>
					<td><a href= {`/?cpsc=${classID}#/sprint/${getCurrentSprintByClassID(classID)}`}>{title}</a></td>
					<td>{classID}</td>
					<td>{schedule}</td>
					<td>{time}</td>
				</tr>
			)
		})
	}

	renderClassTable = (currentClasses) => {
		return ( <div>
			<h5>Classes</h5>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th style={{textAlign:'center'}}>Class</th>
						<th style={{textAlign:'center'}}>Section</th>
						<th style={{textAlign:'center'}}>Schedule</th>
						<th style={{textAlign:'center'}}>Time</th>
					</tr>
				</thead>
				<tbody>
					{this.renderTableBody(currentClasses)}
				</tbody>
			</Table>
		</div> 	)
	}

	render = () => {
		const classes = getClasses()
		return ( <div>
			<h4>Lewis.education</h4>
			<p>The following classes are available from Eric Pogue at Lewis.education.</p>
			{this.renderClassTable(classes)}<br />
		</div> )
	}
}

