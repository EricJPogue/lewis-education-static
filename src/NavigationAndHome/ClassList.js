import React from 'react'
import Table from 'react-bootstrap/Table'

import { getAllClassSections } from '../DataAndAPIs/ClassSections'
// import { pastDate } from '../CalendarAndSchedule/SprintDates'

export const ClassList = () => {
	// This method of rendering multiple row is described at the following link:
	//     https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
	const renderTableBody = (currentClasses) => {
		return currentClasses.map((currentClass, index) => {
			const { id, meetingDays, meetingTimes, course } = currentClass
			return (
				<tr key={index}>
					<td><a href= {`/?cpsc=${id}#/modules`}>{course.name}</a></td>
					<td>{id}</td><td>{meetingDays}</td><td>{meetingTimes}</td>
				</tr>
			)
		})
	}

	const classSections = getAllClassSections()
	return ( <div>
		<h4>Lewis.education</h4>
		<p>The following classes are available through Lewis.education.</p>
		<h5>Classes</h5>
		<Table striped bordered hover>
			<thead>
				<tr style={{backgroundColor:'#C0C0C0'}}>
					<th style={{textAlign:'center', }}>Class</th><th style={{textAlign:'center'}}>Section</th>
					<th style={{textAlign:'center'}}>Schedule</th><th style={{textAlign:'center'}}>Time</th>
				</tr>
			</thead>
			<tbody>
				{renderTableBody(classSections)}
			</tbody>
		</Table> 
	</div> )
} 

