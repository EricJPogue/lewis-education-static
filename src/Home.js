import React from 'react'
import Table from 'react-bootstrap/Table'

import { getCurrentClasses } from './data/ClientDataAPIs'

export class Home extends React.Component {
	// This method of rendering multiple row is described at the following link:
	//     https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
	renderTableBody = () => {
		let currentClasses = getCurrentClasses()
		return currentClasses.map((currentClass, index) => {
			const { classID, title, schedule, time } = currentClass
			return (
				<tr key={classID}>
					<td>{title}</td>
					<td><a href= {`/?cpsc=${classID}#/sprint/1`}>{classID}</a></td>
					<td>{schedule}</td>
					<td>{time}</td>
				</tr>
			)
		})
	}

	render = () => {
		return (
			<div>
			<h4>Lewis.education</h4>
			<p>The following spring 2020 classes are available from Eric Pogue at Lewis.education</p>
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
					{this.renderTableBody()}
				</tbody>
			</Table>

			Looking for classes from previous semesters, try <a href='https://www.lewis.education/#/test/me'>here</a>.
			</div>
		)
	}
}
